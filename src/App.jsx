import { useState } from 'react'
import './App.css'
import './components/Enemy/Enemy'
import Enemy from './components/Enemy/Enemy'
import Player from './components/Player/Player'

function App() {
  const [enemy, setEnemy] = useState({});
  const [player, setPlayer] = useState({
    level:1,
    weapons:[
      {name: "quarterstaff", attack:0, damage: 6}
    ],
    health:10,
    maxhp:10,
    armor:10,
  })
  const [enemyHealth, setEnemyHealth] = useState(100);

  function attack(){
    console.log("attack!")
  }
  

  return (
    <div className="App">
      <header>
        <h1>play some DND!</h1>
      </header>
      <section className="arena">
        <Enemy
          enemy={enemy}
          enemyHealth={enemyHealth}/>
        <Player
          player={player}
          attack={attack}/>
      </section>
    </div>
  )
}

export default App
