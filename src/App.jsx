import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Arena from './components/Arena/Arena';
import Credits from './components/Credits/Credits';

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
    health:15,
    maxhp:15,
    armor:10,
    strength:2,
    proficiencies:["Simple Weapons", "Light Armor", "Shields"]
})

  return (
    <div className="App">
      <Router>
        <header style={{padding:"1rem"}}>
          <h1 style={{color:"white"}}>Dragon Game</h1>
          <nav>
            <Link to="/dragon-game/" style={{color:"white", fontSize:".8rem", fontFamily:"var(--font)"}}>Credits</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/dragon-game/" element={<Credits/>} />
          <Route path="/dragon-game/arena" element={<Arena player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
