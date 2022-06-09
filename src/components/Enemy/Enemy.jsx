import styles from './enemy.module.scss';
import Dragon from '../Dragon/Dragon';
import Actions from '../Actions/Actions';

export default function Enemy(props) {
    const {name, alignment, ac, hp, maxhp, actions, challenge} = props.enemy;
    const loading = props.loading;

    return (
        <div className={styles.root}>
            <div className={styles.main}>
                <div className={styles.enemyHealth}>
                    <label htmlFor='enemy-hp'>HP: {hp}
                    </label>
                    <meter id='enemy-hp'
                        min="0" max={maxhp}
                        optimum={maxhp} high={Math.floor(maxhp * (2/3))} low={Math.floor(maxhp * (1/3))}
                        value={hp}>{hp}/100
                    </meter>
                </div>
                <div className={styles.enemy}>
                    <div className={styles.challenge}>
                        <Dragon challenge={challenge} saturated="#771313"/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h2>{loading? "Getting you an enemy!" : name? name : "No name :("}</h2>
                            <p>Alignment: {alignment? alignment : "true neutral"} * Armor class: {ac? ac : "10"}</p>
                        </div>
                        <Actions actions={actions}/>
                    </div>
                </div>
            </div>
        </div>
    )

}