import s from './weapon.module.scss'

export default function Weapon(props) {
    const {weapon, attack, attackfn} = props;
    // console.log(weapon);

    return (
        <div className={s.root}>
            <h3>{weapon.name}</h3>
            <p>Attack: +{attack}<br/>
            Damage: {weapon.dice} {weapon.type}</p>
            
            <button onClick={() => attackfn(attack, weapon.dice, weapon.type)}>ATTACK!</button>
        </div>
    )

}