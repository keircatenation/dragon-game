import styles from './player.module.scss'
import Armory from '../Armory/Armory';
import Weapon from '../Weapon/Weapon';

export default function Player(props) {
    const {attack} = props;
    const {health, level, armor, weapons, maxhp, strength, proficiencies, defense, rightHand, leftHand, bothHands} = props.player;
    let hands = [];
    if (bothHands.length>0){
        hands = [bothHands];
    } else {
        hands = [leftHand, rightHand];
        console.log(hands);
    }

    return (
        <div className={styles.root}>
            <div onClick={attack} className={styles.selected}>
                <h2>Selected Weapons</h2>
                <div className={styles.weapons}>
                    {hands.map((hand, index) => {
                        return (
                        <p key={index}>weapon!:</p>
                    )})}
                </div>
            </div>
            
            <Armory weapons={weapons} attack={strength}/>

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