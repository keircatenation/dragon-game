import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Arena from './components/Arena/Arena';
import Credits from './components/Credits/Credits';
import Armory from './components/Armory/Armory';
import Journal from './components/Journal/Journal';

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
    defense:[],
    rightHand:{},
    leftHand:{},
    health:15,
    maxhp:15,
    armor:10,
    strength:2,
    proficiencies:["Simple Weapons", "Light Armor", "Shields"]
  })
  const [armory, setArmory] = useState({
    armor: [],
    weapons: [],
    shields:[]
  })
  const [journal, setJournal] = useState([]);

  return (
    <div className="App">
      <Router>
        <header style={{padding:"1rem"}}>
          <h1 style={{color:"white"}}>Dragon Game</h1>
          <Link to="/dragon-game/" >Credits</Link>
        </header>
        <nav>
          <Link to="/dragon-game/arena">Arena</Link>
          <Link to="/dragon-game/armory">Armory</Link>
          <Link to="/dragon-game/journal">Journal</Link>
        </nav>
        <Routes>
          <Route path="/dragon-game/" element={<Credits/>} />
          <Route path="/dragon-game/arena" element={<Arena player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} setArmory={setArmory}/>} />
          <Route path="/dragon-game/armory" element={<Armory armory={armory}/>} />
          <Route path="/dragon-game/journal" element={<Journal journal={journal}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
