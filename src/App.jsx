import { useState, useEffect } from 'react'
import './App.css'
import './components/Enemy/Enemy'
import Enemy from './components/Enemy/Enemy'
import Player from './components/Player/Player'
const API = "https://www.dnd5eapi.co";

function App() {
  const [enemy, setEnemy] = useState({
    name: "",
    alignment:"",
    armor:10,
    health:10,
    maxhp:10,
    actions:[],
    challenge:1
  });
  const [player, setPlayer] = useState({
    level:1,
    weapons:[],
    defense:[],
    rightHand:{},
    leftHand:{},
    bothHands:{},
    health:10,
    maxhp:10,
    armor:10,
    strength:2,
    proficiencies:["Simple Weapons", "Light Armor", "Shields"]
  })
  useEffect(() => {
    getEnemy(.25);
    getWeapon("simple-weapons");
  }, [])

  function addWeapon(weapon){
    setPlayer(prev => ({
      ...prev,
      weapons:[...prev.weapons, weapon]
    }))
  }

  function attack(){
    console.log("attack!")
  }

  function getWeapon(category="weapon"){
    // get all weapons
    try{
      fetch(`${API}/api/equipment-categories/${category}`)
      .then(resp=> resp.json())
      .then(data => {
        //get a random index of one weapon
        let index = Math.floor(Math.random()*data.equipment.length);
        let url = data.equipment[index].url;

        //fetch that random weapon
        fetch(`${API}${url}`)
        .then(resp => resp.json())
        .then(data => {
          let weapon = {name:data.name,dice: data.damage.damage_dice, type: data.damage.damage_type.name, category:data.weapon_category, properties:data.properties}
          
          // add it to the player's armory
          addWeapon(weapon);
        })

      })
    } catch(err){
      console.log(err)
    }
  }
  function getArmor(armor){
    // armor - light-armor, medium-armor, heavy-armor
    fetch(`${API}/api/equipment-categories/${armor}`)
  }
  function getShield(){
    fetch(`${API}/api/equipment-categories/shields`)
  }

  function getEnemy(challenge=1){
    try {
      // this fetches a list of DND monsters of the inputted challenge level; the automatic level will be 1, since that's where we're starting the player off
      fetch(`${API}/api/monsters?challenge_rating=${challenge}`)
      .then(resp => resp.json())
      .then(data => {
        let count = data.count;
        let index = Math.floor(Math.random()*count);
        let url = data.results[index].url;

        // this grabs the random monster decided bu the Math.random() above
        fetch(`${API}${url}`)
          .then(resp => resp.json())
          .then(data => {

            // filters out the actions that aren't attacks
            let actions = data.actions.filter(action => {
              if (action.damage.length > 0){
                return action;
              }
            })

            // sets the information of the Enemy
            setEnemy({
              name:data.name,
              alignment:data.alignment,
              armor:data.armor_class,
              health:data.hit_points,
              maxhp:data.hit_points,
              actions,
              challenge
            })
          })

      })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>play some DND!</h1>
      </header>
      <section className="arena">
        <Enemy
          enemy={enemy}/>
        <Player
          player={player}
          attack={attack}/>
      </section>
    </div>
  )
}

export default App
