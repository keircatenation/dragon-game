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

    const [fighting, setFighting] = useState(false);

    function attack(strength, dam, type){

        // First, we roll our own attack
        let dice = dam.match(/\d+/g);
        let attackRoll = rollAttack(strength);

        if (attackRoll[0] >= enemy.armor){
            let damageRoll = rollDamage(dice[0], dice[1], attackRoll[1]);
            console.log("damage: ", damageRoll);
            setFightingState( {
                attack: attackRoll[0],
                hit: true,
                message: attackRoll[1],
                damage: damageRoll
            } )
            setFighting(true);
            
            setTimeout(() => {
                if (enemy.health - damageRoll > 0){
                    decrementEnemyHealth( damageRoll );
                } else {
                    console.log("DEAD ENEMY");
                    // setisEnemyDead(true);
                    return;
                }
                setFighting(false);
                setFightingState( {
                    attack:0,
                    hit: false,
                    message:'',
                    damage:0
                } )
            }, 2000);
        } else{
            setFightingState( {
                attack: attackRoll[0],
                hit: false,
                message: '',
                damage: 0
            } )
            setFighting(true);
            setTimeout(() => {
                setFighting(false);
            }, 2000);
        }

        // now the enemy attacks back! but only if the enemy isn't dead, because we return once the enemy is dead
        console.log( 'enemy isn\'t dead yet' )
        let atkBonus = enemy.actions[0].attack_bonus;
        let eAttackRoll = rollAttack(atkBonus);
        // console.log(eAttackRoll)
        if (eAttackRoll[0] > ac) {
            let eDamageDice = enemy.actions[0].damage[0].damage_dice;
            let dice = eDamageDice.match(/\d+/g);
            let eAttackDamage = rollDamage(dice[0], dice[1], eAttackRoll[1]);
            // console.log(eAttackDamage)
            decrementPlayerHealth(eAttackDamage);
        }
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