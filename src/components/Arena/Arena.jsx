import s from './arena.module.scss'
import Player from '../Player/Player'
import Enemy from '../Enemy/Enemy';
import { useDragonStore } from '../../DragonStore';


export default function Arena( props ) {
    const enemy = useDragonStore( (store) => store.enemy );
    const setEnemy = useDragonStore( (store) => store.setEnemy );

    const { loading, getEnemy } = props;

    return (
        <section className={s.root}>
            <div className={s.enemy}>
                {loading && "...loading"}
                {
                    !enemy.name ? <button onClick={() => getEnemy()}>Get Enemy</button> : <Enemy />
                }
            </div>
            <Player />
        </section>
    )

}