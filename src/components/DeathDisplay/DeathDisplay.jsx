import { useDragonStore } from '../../DragonStore';
import { useFetch } from 'use-http';
import s from './deathdisplay.module.scss';
import { useState } from 'react';

export default function DeathDisplay(props) {
    const { isPlayerDead, isEnemyDead, addWeapon, addArmor } = useDragonStore( (store) => store );
    const { get, post, response, loading, error } = useFetch("https://www.dnd5eapi.co");
    const [lootMessage, setLootMessage] = useState('');
    
    async function getLoot() {
        let allUrl;
        let type;
        let d20 = Math.floor(Math.random()*20)+1;
        if ( d20 < 15 ) {
            allUrl = '/api/equipment-categories/simple-weapons'
            type='weapon'
        } else {
            allUrl = '/api/equipment-categories/armor'
            type='armor'
        }

        const allLoot = await get(allUrl);
        let url;
        if ( response.ok ) {
            let index = Math.floor( Math.random() * allLoot.equipment.length )
            url = allLoot.equipment[index].url;
        }

        const data = await get(url);
        if (response.ok) {
            switch(type) {
                case 'weapon':
                    let weapon = {
                        name: data.name,
                        desc: data.desc ?? [],
                        dice: data.damage?.damage_dice ?? "",
                        type: data.damage?.damage_type.name ?? "",
                        atkBonus: 0,
                        category: data.weapon_category ?? "",
                        rarity: data.rarity ?? "",
                        properties: data.properties ?? []
                    }
                    setLootMessage( `You got a weapon: ${weapon.name}!` )
                    addWeapon(weapon)
                    break;
                case 'armor':
                    let armor = {
                        name: data.name,
                        desc: data.desc ?? [],
                        category: data.armor_category + ' Armor',
                        class: data.armor_class?.base,
                        equipped: false
                    }
                    console.log(armor)
                    setLootMessage( `You got some armor: ${armor.name}!` )
                    addArmor(armor);
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className={s.root}>
            {
                isEnemyDead && <h2>congrats!</h2>
            }
            {
                isEnemyDead && <p>Let's see what loot this enemy has for you...</p>
            }
            {
                (isEnemyDead && !lootMessage) && <button onClick={getLoot}>GET LOOT</button>
            }
            {
                (isEnemyDead && lootMessage) && <p>{lootMessage}</p>
            }
            {
                (isEnemyDead && lootMessage) && <button>Equip</button>
            }
            {
                isPlayerDead && <h2>oof, that's rough.</h2>
            }
            {
                isPlayerDead && <p>Want to try again?</p>
            }
            {
                isPlayerDead && <button>TRY AGAIN</button>
            }
        </div>
    )

}