import styles from './player.module.scss'
import Weapons from '../Weapons/Weapons';

export default function Player(props) {
    const {attack} = props;
    const {health, level, armor, weapons, maxhp, strength, proficiencies} = props.player;

    return (
        <div className={styles.root}>
            <div onClick={attack} className={styles.player}>player!</div>
            <label htmlFor='player-hp'>HP {maxhp}
            </label>
            <div className={styles.stats}>
                <p>Level: {level}</p>
                <p>Armor Class: {armor}</p>
                <p>Strength: +{strength}</p>
                <p>Proficiencies: {proficiencies.join(", ")}</p>
            </div>
            <Weapons weapons={weapons} attack={strength}/>
            <meter id='player-hp'
                min="0" max={maxhp}
                optimum={maxhp} high={Math.floor(maxhp * (2/3))} low={Math.floor(maxhp * (1/3))}
                value={health}>{health}/100
            </meter>
        </div>
    )

}