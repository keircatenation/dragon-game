import { useState } from 'react'
import { useDragonStore } from '../../DragonStore';
import styles from './player.module.scss'
// import Weapon from '../Weapon/Weapon';
import Fighting from '../Fighting/Fighting';

export default function Player(props) {
    const enemy = useDragonStore( (store) => store.enemy );
    const decrementEnemyHealth = useDragonStore( (store) => store.decrementEnemyHealth );
    const {health, level, ac, maxhp, strength, proficiencies, weapon} = useDragonStore( (store) => store.player );

    const [fighting, setFighting] = useState(false);
    const [damage, setDamage] = useState({
        message:"",
        num:0,
    });

    function attack(strength, dam, type){
        console.log("attack!", type);

        let numDie = dam.match(/^\d+/)[0];
        let dice = dam.match(/\d+$/)[0];

        let r = attackRoll(strength);
        console.log("attack roll: ", r, enemy.armor, enemy.health);

        if (r[0] >= enemy.armor){
            let d = damageRoll(numDie, dice, r[1]);
            console.log("damage: ", d);
            setDamage({
                message:r[1],
                num:d,
            });
            setFighting(true);
            
            setTimeout(() => {
                if (enemy.health-d > 0){
                    decrementEnemyHealth( d );
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
    function attackRoll(bonus){
        let d20 = Math.floor(Math.random()*20)+1;
        if (d20 == 20){
            return [d20+bonus, "crit"]
        } else {
            return [d20+bonus, ""]
        }
    }
    function damageRoll(num, dice, crit){
        let damage = num * Math.floor(Math.random()*dice)+1;
        switch(crit){
            case "crit":
                return damage*2;
            default:
                return damage;
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