// This is the literal armory for the player, showing all of their weapons and armor. From here, players can equip an item onto their "player" in the arena

import styles from './armory.module.scss'
import { useState } from 'react';

export default function Armory(props) {
    const {armor, weapons, shields} = props.armory;
    
    // armor = array of all armor
    // weapons = array of all weapons
    // shields = array of all shields
    

    return (
        <div className={styles.root}>
            
            <h2>A list of all weapons!</h2>
        </div>
    )

}