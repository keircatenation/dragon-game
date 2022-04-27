import s from './weapon.module.scss'

export default function Weapon(props) {
    const {weapon, attack, attackfn, empty} = props;
    // console.log(weapon);

    return (
        <div className={s.root}>
            <h3>{!empty? weapon.name : "Select a Weapon!"}</h3>
            <p>Attack: +{attack}<br/>
            Damage: { !empty? weapon.dice : ""} {!empty? weapon.type: ""}</p>
            
            {!empty? <button onClick={() => attackfn(attack, weapon.dice, weapon.type)}>ATTACK!</button> : ""}
        </div>
    )

}