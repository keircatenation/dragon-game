import { useState } from 'react'
import styles from './player.module.scss'
import Armory from '../Armory/Armory';
import Weapon from '../Weapon/Weapon';
import Fighting from '../Fighting/Fighting';

export default function Player(props) {
    const {setter, setEnemy, enemy, getEnemy} = props;
    const {health, level, armor, weapons, maxhp, strength, proficiencies, rightHand, leftHand} = props.player;
    const [fighting, setFighting] = useState(false);
    const [damage, setDamage] = useState({
        message:"",
        num:0,
    });

    function attack(attack, dam, type){
        console.log("attack!", type);

        let numDie = dam.match(/^\d+/)[0];
        let dice = dam.match(/\d+$/)[0];

        let r = attackRoll(attack);
        console.log("attack roll: ", r);
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
                    setEnemy(prev => ({
                        ...prev,
                        health:prev.health-d,
                    }))
                } else {
                    console.log("DEAD ENEMY");
                    
                    getEnemy();
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
                fighting? <Fighting damage={damage}/> : ""
            }
            <div className={styles.selected}>
                <h2>Selected Weapons</h2>
                <div className={styles.weapons}>
                    {
                        Object.keys(leftHand).length == 0? <Weapon empty={true} attackfn={attack} attack={strength}/> : <Weapon weapon={leftHand} attackfn={attack} attack={strength}/>
                    }
                    {
                        Object.keys(rightHand).length == 0? <Weapon empty={true} attackfn={attack} attack={strength}/> : <Weapon weapon={rightHand} attackfn={attack} attack={strength}/>
                    }
                    
                </div>
            </div>
            
            <div className={styles.armory}>
                {weapons.map((weapon, index) => {
                    return (
                        <Armory weapon={weapon} key={weapon+index} attack={strength} setter={setter}/>
                    );
                })}
            </div>

            <div className={styles.stats}>
                <div>
                    <p>Level: {level}</p>
                    <p>Armor Class: {armor}</p>
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