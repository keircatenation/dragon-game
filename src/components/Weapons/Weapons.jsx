import styles from './weapons.module.scss'

export default function Weapons(props) {
    const {weapons} = props;

    return (
        <div className={styles.root}>
            {weapons.map(weapon => {
                return (
                    <button key={weapon.name}>
                        <p>{weapon.name}</p>
                        <p>Attack: +{weapon.attack}</p>
                        <p>Damage: 1d{weapon.damage}</p>
                    </button>
                );
            })}
        </div>
    )

}