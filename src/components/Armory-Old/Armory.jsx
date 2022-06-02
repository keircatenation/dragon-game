import styles from './armory.module.scss'
import { useState } from 'react';

export default function Armory(props) {
    const {weapon, attack, setter} = props;
    const [clicked, setClick] = useState(false);

    function setRight(w){
        // console.log("right");
        setter(prev => ({
            ...prev,
            rightHand:w,
        }))
    }
    function setLeft(w){
        // console.log("left");
        setter(prev => ({
            ...prev,
            leftHand:w,
        }))
    }

    return (
        <div className={styles.root} onClick={() => setClick(prev=> !prev)}>
            <p>{weapon.name}</p>
            <p>Attack: +{attack}</p>
            <p>Damage: {weapon.dice} {weapon.type}</p>
            <p>Category: {weapon.category}</p>
            {!clicked? "" : <div>
                <button onClick={() => setLeft(weapon)}>Left</button>
                <button onClick={() => setRight(weapon)}>Right</button>
                </div>}
        </div>
    )

}