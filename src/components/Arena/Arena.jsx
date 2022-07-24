import s from './arena.module.scss'
import Player from '../Player/Player'
import Enemy from '../Enemy/Enemy';


export default function Arena( props ) {
    const { player, enemy, getEnemy, addShield, addArmor, addEnemyToJournal, getWeapon, loading } = props;

    return (
        <section className={s.root}>
            <div className={s.enemy}>
                {loading && "...loading"}
                {
                    !enemy.name ? <button onClick={() => getEnemy()}>Get Enemy</button> : <Enemy enemy={enemy} />
                }
            </div>
            <Player
                player={player}
                enemy={enemy}
            />
        </section>
    )

}