import s from './armory.module.scss'
import { useState } from 'react';
import Weapon from '../Weapon/Weapon';

export default function Armory(props) {
    const {armor, weapons, shields} = props.armory;
    const { setPlayer } = props;

    

    return (
        <div className={s.root}>
            <h2>Weapons</h2>
            <div id="weapons" className={s.armory}>
                {
                    weapons.map( (weapon, index) => {
                        return (
                            <Weapon weapon={weapon} index={index} setPlayer={setPlayer}/>
                        )
                    })
                }
            </div>
        </div>
    )

}