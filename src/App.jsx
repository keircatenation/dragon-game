import { useState } from 'react'
import './App.css'
import './components/Enemy/Enemy'
import Enemy from './components/Enemy/Enemy'
import Player from './components/Player/Player'

function App() {
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);

  function attack(){
    playerAttack();
    setTimeout(()=>{
      enemyAttack();
    }, 500)
  }
  function playerAttack(){
    let roll = Math.floor(Math.random()*4+1);
    setEnemyHealth(enemyHealth-roll);
  }
  function enemyAttack(){
    let roll = Math.floor(Math.random()*4+1);
    setPlayerHealth(playerHealth-roll);
  }

  return (
    <div className="App">
      <header>
        <h1>play some DND!</h1>
      </header>
      <section className="arena">
        <Enemy
          enemyHealth={enemyHealth}/>
        <Player
          playerHealth={playerHealth}
          attack={attack}/>
      </section>
    </div>
  )
}

export default App
