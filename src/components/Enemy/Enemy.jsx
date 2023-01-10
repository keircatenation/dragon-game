import Dragon from '../Dragon/Dragon';
import s from './enemy.module.scss'
import { useDragonStore } from '../../DragonStore';


export default function Enemy(props) {
    const { name, armor, health, maxhp, action, challenge } = useDragonStore( (store) => store.enemy );
    // console.log(action)
    const damage = action.damage[0].damage_type ? action.damage[0] : action.damage[0].from.options[0];
    
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
                    <div className={s.action}>
                        <p>{action.name}</p>
                        <p>{action.desc}</p>
                        <p>Attack bonus: +{action.attack_bonus}</p>
                        <p>Damage: {damage.damage_dice ? damage.damage_dice : ""} {damage.damage_type.name ? damage.damage_type.name : ''}</p>
                    </div>
                </div>
            </div>
        </>
    )

}