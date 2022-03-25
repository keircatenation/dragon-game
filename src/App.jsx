import { useState, useEffect } from 'react'
import './App.css'
import './components/Enemy/Enemy'
import Enemy from './components/Enemy/Enemy'
import Player from './components/Player/Player'

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
    weapons:[
      {name: "quarterstaff", attack:0, damage: 6}
    ],
    health:10,
    maxhp:10,
    armor:10,
  })

  useEffect(() => {
    getEnemy();
  }, [])

  function attack(){
    console.log("attack!")
  }

  function getEnemy(challenge=1){
    try {
      // this fetches a list of DND monsters of the inputted challenge level; the automatic level will be 1, since that's where we're starting the player off
      fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating=${challenge}`)
      .then(resp => resp.json())
      .then(data => {
        let count = data.count;
        let index = Math.floor(Math.random()*count);
        let url = data.results[index].url;

        // this grabs the random monster decided bu the Math.random() above
        fetch(`https://www.dnd5eapi.co${url}`)
          .then(resp => resp.json())
          .then(data => {
            let actions = data.actions.filter(action => {
              if (action.damage.length > 0){
                return action;
              }
            })
            console.log(actions);
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
