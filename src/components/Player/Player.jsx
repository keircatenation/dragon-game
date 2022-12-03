import { useState } from 'react'
import { useDragonStore } from '../../DragonStore';
import styles from './player.module.scss'
// import Weapon from '../Weapon/Weapon';
import Fighting from '../Fighting/Fighting';

export default function Player(props) {
    const enemy = useDragonStore( (store) => store.enemy );
    const rollAttack = useDragonStore( (store) => store.rollAttack );
    const rollDamage = useDragonStore( (store) => store.rollDamage );
    const decrementEnemyHealth = useDragonStore( (store) => store.decrementEnemyHealth );
    const {health, level, ac, maxhp, strength, proficiencies, weapon} = useDragonStore( (store) => store.player );

    const [fighting, setFighting] = useState(false);
    const [damage, setDamage] = useState({
        message:"",
        num:0,
    });

    function attack(strength, dam, type){
        console.log("attack!", type);

        let numDice = dam.match(/^\d+/)[0];
        let numSides = dam.match(/\d+$/)[0];

        let attackRoll = rollAttack(strength);
        console.log("attack roll: ", attackRoll, enemy.armor, enemy.health);

        if (attackRoll[0] >= enemy.armor){
            let damageRoll = rollDamage(numDice, numSides, attackRoll[1]);
            console.log("damage: ", damageRoll);
            setDamage({
                message:attackRoll[1],
                num:damageRoll,
            });
            setFighting(true);
            
            setTimeout(() => {
                if (enemy.health - damageRoll > 0){
                    decrementEnemyHealth( damageRoll );
                } else {
                    console.log("DEAD ENEMY");
                }
                setFighting(false);
                setDamage({message:"",
                num:0,});
            }, 2000);
        } else{
            setFighting(true);
            setTimeout(() => {
                setFighting(false);
            }, 2000);
        }
    }

    return (
        <div className={styles.root}>
            {
                fighting && <Fighting damage={damage}/>
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