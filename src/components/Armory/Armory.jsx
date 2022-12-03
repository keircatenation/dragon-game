import s from './armory.module.scss'
import { useDragonStore } from '../../DragonStore';
import { useState } from 'react';
import Weapon from '../Weapon/Weapon';

export default function Armory(props) {
    const armory = useDragonStore( (store) => store.armory );
    const {armor, weapons, shields} = armory;

    return (
        <div className={s.root}>
            <h2>Weapons</h2>
            <div id="weapons" className={s.armory}>
                {
                    weapons.map( (weapon, index) => {
                        let key = `${index}+${weapon.name}`
                        return (
                            <Weapon weapon={weapon} index={index} key={key}/>
                        )
                    })
                }
            </div>
            <h2>Armor</h2>
            <div id="armor" className={s.armory}>
                {
                    armor.map( (arm, index) => {
                        return (
                            <p>{arm.name}</p>
                        )
                    })
                }
            </div>
            <h2>Shields</h2>
            <div id="shields" className={s.armory}>
                {
                    shields.map( (shield, index) => {
                        return (
                            <p>{shield.name}</p>
                        )
                    })
                }
            </div>
        </div>
    )

}