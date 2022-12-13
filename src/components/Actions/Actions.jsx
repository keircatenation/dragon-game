import styles from './actions.module.scss';

export default function Actions(props) {
    let actions = props.actions;

    return (
        <div className={styles.root}>
            {
                actions.map(action => {
                    let damages = action.damage[0];
                    return (
                        <div className={styles.action} key={action.name}>
                            <p>{action.name}</p>
                            <p>Attack bonus: +{action.attack_bonus}</p>
                            <p>Damage: {damages.damage_dice ? damages.damage_dice : ""} {damages.damage_type.name ?? {}}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}