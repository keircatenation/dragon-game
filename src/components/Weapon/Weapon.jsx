import s from './weapon.module.scss'
import { useState, useEffect } from 'react';

export default function Weapon(props) {
    const {weapon, index, setWeapon, armory} = props;
    const [isEquipped, setisEquipped] = useState(weapon.equipped);
    useEffect(() => {
        setisEquipped(weapon.equipped)
    }, [armory])

    return (
        <div className={s.root}>
            <h3>{weapon.name}</h3>
            <p>Attack: +player strength<br/>
            Damage: {weapon.dice} {weapon.type}<br/>
            Category: {weapon.category}</p>
            {isEquipped && <p>Equipped</p>}
            <button onClick={()=> setWeapon(weapon, index)}>Select Weapon</button>
        </div>
    )

}