import s from './fighting.module.scss'
import { useDragonStore } from '../../DragonStore'

export default function Fighting(props) {
    const fightingState = useDragonStore( (store) => store.fightingState )
    return (
        <div className={s.root}>
            <div className={s.player}>

                <p>Your attack roll: {fightingState.player.attack}</p>
                {
                    fightingState.player.hit ? <p>You hit!</p> : <p>You missed :(</p>
                }
                <p>{fightingState.player.message? fightingState.player.message : ""}</p>
                <p>{fightingState.player.damage? 'Your damage: ' + fightingState.player.damage : ""}</p>
            </div>
            <div className={s.enemy}>
                <p>The enemy's attack roll: {fightingState.enemy.attack}</p>
                {
                    fightingState.enemy.hit ? <p>They hit :(</p> : <p>They missed!</p>
                }
                <p>{fightingState.enemy.message? fightingState.enemy.message : ""}</p>
                <p>{fightingState.enemy.damage? 'Your damage: ' + fightingState.enemy.damage : ""}</p>
            </div>
        </div>
    )

}