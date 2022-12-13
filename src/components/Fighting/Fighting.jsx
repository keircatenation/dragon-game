import s from './fighting.module.scss'
import { useDragonStore } from '../../DragonStore'

export default function Fighting(props) {
    const fightingState = useDragonStore( (store) => store.fightingState )

    return (
        <div className={s.root}>
            <p>Your attack roll: {fightingState.attack}</p>
            {
                fightingState.hit ? <p>You attack!</p> : <p>You missed :(</p>
            }
            <p>{fightingState.message? fightingState.message : ""}</p>
            <p>{fightingState.damage? 'Your damage: ' + fightingState.damage : ""}</p>
        </div>
    )

}