import s from './weapon.module.scss'
import { useState, useEffect } from 'react';
import { useDragonStore } from '../../DragonStore';

export default function Weapon(props) {
    const {weapon, index} = props;
    const setEquippedWeapon = useDragonStore( (store) => store.setEquippedWeapon );
    const equipped = useDragonStore( (store) => store.player.weapon );
    const strength = useDragonStore( (store) => store.player.strength )
    const isEquipped = weapon == equipped;
    const attack = strength + weapon.atkBonus;
    return (
        <div className={s.root}>
            <h3>{weapon.name}</h3>
            <p>Attack: +{attack}<br/>
            Damage: {weapon.dice} {weapon.type}<br/>
            Category: {weapon.category}</p>
            {isEquipped && <p>Equipped</p>}
            <button onClick={()=> setEquippedWeapon(weapon)}>Select Weapon</button>
        </div>
    )

}