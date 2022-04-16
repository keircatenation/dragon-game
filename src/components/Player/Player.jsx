import styles from './player.module.scss'
import Armory from '../Armory/Armory';
import Weapon from '../Weapon/Weapon';

export default function Player(props) {
    const {attack, setter} = props;
    const {health, level, armor, weapons, maxhp, strength, proficiencies, rightHand, leftHand} = props.player;
    

    return (
        <div className={styles.root}>
            <div className={styles.selected}>
                <h2>Selected Weapons</h2>
                <div className={styles.weapons}>
                    {
                        Object.keys(leftHand).length == 0? "" : <Weapon weapon={leftHand} attackfn={attack} attack={strength}/>
                    }
                    {
                        Object.keys(rightHand).length == 0? "" : <Weapon weapon={rightHand} attackfn={attack} attack={strength}/>
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