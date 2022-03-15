import styles from './enemy.module.scss'
import Dragon from '../Dragon/Dragon'
import { useEffect } from 'react/cjs/react.production.min';

export default function Enemy(props) {
    const {name, alignment, armor, health, maxhp, actions} = props.enemy;
    console.log("actions ", actions)

    return (
        <div className={styles.root}>
            <div className={styles.main}>
                <label htmlFor='enemy-hp'>HP: {health}
                </label>
                <meter id='enemy-hp'
                    min="0" max={maxhp}
                    optimum={maxhp} high={Math.floor(maxhp * (2/3))} low={Math.floor(maxhp * (1/3))}
                    value={health}>{health}/100
                </meter>
                <div className={styles.enemy}>
                    <div>
                        <h2>{name}</h2>
                        <p>Alignment: {alignment}</p>
                        <p>Armor class: {armor}</p>
                        <p>Actions: </p>
                    </div>
                    <Dragon/>
                </div>
            </div>
        </div>
    )

}