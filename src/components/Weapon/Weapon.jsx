import s from './weapon.module.scss'
import { useState } from 'react';

export default function Weapon(props) {
    const {weapon, index, setPlayer} = props;
    const [isEquipped, setIsEquipped] = useState(false);

    function setAsRightHand(weapon) {
        setIsEquipped(true);
        setPlayer( prev => ({
            ...prev,
            rightHand: weapon
        }))
    }
    function setAsLeftHand(weapon) {
        setIsEquipped(true);
        setPlayer( prev => ({
            ...prev,
            leftHand: weapon
        }))
    }

    return (
        <div className={s.root} key={index}>
            <h3>{weapon.name}</h3>
            <p>Attack: +player strength<br/>
            Damage: {weapon.dice} {weapon.type}<br/>
            Category: {weapon.category}</p>
            
            {isEquipped && <p>Equipped</p>}
            <button onClick={()=> setAsLeftHand(weapon)}>Set Left Hand</button>
            <button onClick={()=> setAsRightHand(weapon)}>Set Right Hand</button>
        </div>
    )

}