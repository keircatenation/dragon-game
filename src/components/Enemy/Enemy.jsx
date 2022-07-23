import Dragon from '../Dragon/Dragon';
import Actions from '../Actions/Actions';
import s from './enemy.module.scss'

export default function Enemy(props) {
    const {name, armor, health, maxhp, actions, challenge} = props.enemy;

    return (
        <>
            <div className={s.enemyHealth}>
                <label htmlFor='enemy-hp'>HP: {health}
                </label>
                <meter id='enemy-hp'
                    min="0" max={maxhp}
                    optimum={maxhp} high={Math.floor(maxhp * (2/3))} low={Math.floor(maxhp * (1/3))}
                    value={health}>{health}/100
                </meter>
            </div>
            <div>
                <div className={s.challenge}>
                    <Dragon challenge={challenge} saturated="#771313"/>
                </div>
                <div className={s.info}>
                    <div className={s.text}>
                        <h2>{name? name : "No name :("}</h2>
                        <p>Armor class: {armor? armor : "10"}</p>
                    </div>
                    <Actions actions={actions}/>
                </div>
            </div>
        </>
    )

}