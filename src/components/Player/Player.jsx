import { useState } from 'react'
import { useDragonStore } from '../../DragonStore';
import styles from './player.module.scss'
import Fighting from '../Fighting/Fighting';

export default function Player(props) {
    const enemy = useDragonStore( (store) => store.enemy );
    const rollAttack = useDragonStore( (store) => store.rollAttack );
    const rollDamage = useDragonStore( (store) => store.rollDamage );
    const decrementEnemyHealth = useDragonStore( (store) => store.decrementEnemyHealth );
    const {health, level, ac, maxhp, strength, proficiencies, weapon} = useDragonStore( (store) => store.player );
    const decrementPlayerHealth = useDragonStore( (store) => store.decrementPlayerHealth );
    const fightingState = useDragonStore( (store) => store.fightingState );
    const setFightingState = useDragonStore( (store) => store.setFightingState );
    const clearFightingState = useDragonStore( (store) => store.clearFightingState );

    const [fighting, setFighting] = useState(false);

    function attack(strength, dam, type){

        // First, we roll our own attack
        let dice = dam.match(/\d+/g);
        let fighting = {
            player: {
                attack:0,
                hit: false,
                message:'',
                damage:0
            },
            enemy: {
                attack:0,
                hit: false,
                message:'',
                damage:0
            }
        };

        fighting.player.attack = rollAttack(strength);

        if (fighting.player.attack[0] >= enemy.armor){
            // if attack roll is greater than the enemy, then we roll for damages
            fighting.player.hit = true;
            fighting.player.damage = rollDamage(dice[0], dice[1], fighting.player.attack[1]);
            console.log("damage: ", fighting.player.damage);
            if (enemy.health - fighting.player.damage > 0){
                decrementEnemyHealth( fighting.player.damage );
            } else {
                console.log("DEAD ENEMY");
                // setisEnemyDead(true);
                return;
            }
        }

        // now the enemy attacks back! but only if the enemy isn't dead, because we return once the enemy is dead
        console.log( 'enemy isn\'t dead yet' )
        let atkBonus = enemy.action.attack_bonus;
        fighting.enemy.attack = rollAttack(atkBonus);

        if (fighting.enemy.attack[0] > ac) {
            fighting.enemy.hit = true;

            let eDamageDice = enemy.action.damage[0].damage_type ? enemy.action.damage[0].damage_dice : enemy.action.damage[0].from.options[0].damage_dice;
            let dice = eDamageDice.match(/\d+/g);

            fighting.enemy.damage = rollDamage(dice[0], dice[1], fighting.enemy.attack[1]);
            // console.log(eAttackDamage)
            if (health - fighting.enemy.damage > 0){
                decrementPlayerHealth(fighting.enemy.damage);
            } else {
                console.log("YOU DIED");
                // setisPlayerDead(true);
            }
        }
        setFighting(true);
        setFightingState(fighting);
        setTimeout(() => {
            setFighting(false);
            clearFightingState();
        }, 4000);
    }

    return (
        <div className={styles.root}>
            {
                fighting && <Fighting/>
            }
            <div className={styles.selected}>
                {Object.keys(weapon).length == 0 && <p>Go to your Armory to select your weapon!</p>}
                {Object.keys(weapon).length > 0 && 
                <div className={styles.weapons}>
                    <h3>{weapon.name}</h3>
                    <p>Attack: +player strength<br/>
                    Damage: {weapon.dice} {weapon.type}<br/>
                    Category: {weapon.category}</p>
                    <button onClick={() => attack(strength, weapon.dice, weapon.type)}>Attack!</button>
                </div>
                }
            </div>

            <div className={styles.stats}>
                <div>
                    <p>Level: {level}</p>
                    <p>Armor Class: {ac}</p>
                    <p>Strength: +{strength}</p>
                </div>
                <p>Proficiencies:<br/> {proficiencies.join(", ")}</p>
            </div>
            <label htmlFor='player-hp'>HP {maxhp}
            </label>
            <meter id='player-hp'
                min="0" max={maxhp}
                optimum={maxhp} high={Math.floor(maxhp * (2/3))} low={Math.floor(maxhp * (1/3))}
                value={health}>{health}/100
            </meter>
        </div>
    )

}