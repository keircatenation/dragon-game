import s from './armory.module.scss'
import { useState } from 'react';
import Weapon from '../Weapon/Weapon';

export default function Armory(props) {
    const {armor, weapons, shields} = props.armory;
    const { setPlayer, setArmory, armory } = props;

    function setWeapon(weapon, index) {
        // need to update the weapon in the armory as well
        let newWeapon = {...weapon, equipped: true}
        setArmory( prev => ({
            ...prev,
            weapons: prev.weapons.splice(index, 1, newWeapon)
        }))
        setPlayer( prev => ({
            ...prev,
            weapon: newWeapon
        }))
    }

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