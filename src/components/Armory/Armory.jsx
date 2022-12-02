import s from './armory.module.scss'
import { useDragonStore } from '../../DragonStore';
import { useState } from 'react';
import Weapon from '../Weapon/Weapon';

export default function Armory(props) {
    const armory = useDragonStore( (store) => store.armory );
    const {armor, weapons, shields} = armory;
    const setWeapon = useDragonStore( (store) => store.setWeapon );


    return (
        <div className={s.root}>
            <h2>Weapons</h2>
            <div id="weapons" className={s.armory}>
                {
                    weapons.map( (weapon, index) => {
                        let key = `${index}+${weapon.name}`
                        return (
                            <Weapon weapon={weapon} index={index} setWeapon={setWeapon} key={key} armory={armory}/>
                        )
                    })
                }
            </div>
        </div>
    )

}