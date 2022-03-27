import styles from './weapons.module.scss'

export default function Weapons(props) {
    const {weapons, attack} = props;

    return (
        <div className={styles.root}>
            {weapons.map((weapon, index) => {
                return (
                    <button key={weapon.name + index}>
                        <p>{weapon.name}</p>
                        <p>Attack: +{attack}</p>
                        <p>Damage: {weapon.dice} {weapon.type}</p>
                        <p>Category: {weapon.category}</p>
                    </button>
                );
            })}
        </div>
    )

}