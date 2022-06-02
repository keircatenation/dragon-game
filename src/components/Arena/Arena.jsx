import { useState, useEffect } from 'react'
import s from './arena.module.scss'
import Enemy from '../Enemy/Enemy'
import Player from '../Player/Player'
const API = "https://www.dnd5eapi.co";

export default function Arena( props ) {
    const [loadingEnemy, setLoadingEnemy] = useState( false );
    const { enemy, player, setEnemy, setPlayer, setArmory } = props;
    
    function getWeapon( category="weapon" ) {
        // get all weapons
        try {
            fetch( `${API}/api/equipment-categories/${category}` )
            .then( resp=> resp.json() )
            .then( data => {
                //get a random index of one weapon
                let index = Math.floor(Math.random()*data.equipment.length);
                let url = data.equipment[index].url;

                //fetch that random weapon
                fetch( `${API}${url}` )
                .then( resp => resp.json() )
                .then( data => {
                    let newWeapon = {
                        name:data.name,
                        dice: data.damage.damage_dice,
                        type: data.damage.damage_type.name,
                        category:data.weapon_category,
                        properties:data.properties
                    }
                    
                    // add it to the player's armory
                    setArmory( prev => [...prev, newWeapon] );
                })
            })
        } catch( err ) {
            console.log( err );
        }
    }

    function getArmor( armor ) {
        // armor - light-armor, medium-armor, heavy-armor
        fetch( `${API}/api/equipment-categories/${armor}` )
    }

    function getShield() {
        fetch( `${API}/api/equipment-categories/shields` )
    }

    function getEnemy( challenge=1 ) {
        console.log( "get enemy!" )
        setLoadingEnemy( true );
        try {
        // this fetches a list of DND monsters of the inputted challenge level; the automatic level will be 1, since that's where we're starting the player off
        fetch( `${API}/api/monsters?challenge_rating=${challenge}` )
        .then( resp => resp.json() )
        .then( data => {
            let count = data.count;
            let index = Math.floor(Math.random()*count);
            let url = data.results[index].url;
            console.log( "url 1" )

            // this grabs the random monster decided bu the Math.random() above
            fetch( `${API}${url}` )
            .then( resp => resp.json() )
            .then( data => {
                console.log( "url 2" )
                setLoadingEnemy( false );
                // filters out the actions that aren't attacks
                let actions = data.actions.filter( action => {
                    if ( action.damage.length > 0 ) {
                        return action;
                    }
                });

                // sets the information of the Enemy
                
                setEnemy( {
                name:data.name,
                alignment:data.alignment,
                armor:data.armor_class,
                health:data.hit_points,
                maxhp:data.hit_points,
                actions,
                challenge
                } );
                
            } )

        } )
        } catch ( err ) {
        console.log( err );
        }
    }

    return (
        <section className={s.root}>
            <Enemy
            enemy={enemy} loading={loadingEnemy}/>
            <Player
            player={player}
            enemy={enemy}
            setter={setPlayer}
            setEnemy={setEnemy}
            getEnemy={getEnemy}/>
        </section>
    )

}