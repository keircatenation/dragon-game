import styles from './enemy.module.scss';
import Dragon from '../Dragon/Dragon';
import Actions from '../Actions/Actions';

export default function Enemy(props) {
    const {name, alignment, armor, health, maxhp, actions, challenge} = props.enemy;

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
                    <div className={styles.challenge}>
                        <Dragon challenge={challenge}/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h2>{name}</h2>
                            <p>Alignment: {alignment}</p>
                            <p>Armor class: {armor}</p>
                            <p>Actions</p>
                        </div>
                        <Actions actions={actions}/>
                    </div>
                </div>
            </div>
        </div>
    )

}