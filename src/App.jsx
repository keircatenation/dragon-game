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
    actions:[]
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
      fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating=${challenge}`)
      .then(resp => resp.json())
      .then(data => {
        let count = data.count;
        let index = Math.floor(Math.random()*count);
        let url = data.results[index].url;
        console.log(url);

        fetch(`https://www.dnd5eapi.co${url}`)
          .then(resp => resp.json())
          .then(data => {
            setEnemy({
              name:data.name,
              alignment:data.alignment,
              armor:data.armor_class,
              health:data.hit_points,
              maxhp:data.hit_points,
              actions:data.actions
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
