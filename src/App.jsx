import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Arena from './components/Arena/Arena';
import Credits from './components/Credits/Credits';
import Armory from './components/Armory/Armory';
import Journal from './components/Journal/Journal';
import s from './components/app.module.scss';
import dragon from './assets/dragon-favicon.svg';
// import { getWeapon } from './assets/functions'

const API = "https://www.dnd5eapi.co";

function App() {
  const [enemy, setEnemy] = useState({
    name: "",
    alignment:"",
    ac:10,
    hp:10,
    maxhp:10,
    actions:[],
    challenge:1
  });
  const [player, setPlayer] = useState({
    level:1,
    rightHand:{},
    leftHand:{},
    hp:15,
    maxhp:15,
    ac:10,
    strength:2,
    proficiencies:["Simple Weapons", "Light Armor", "Shields"]
  })
  const [armory, setArmory] = useState({
    armor: [],
    weapons: [],
    shields:[]
  })
  const [journal, setJournal] = useState([]);

  useEffect ( () => {
    getWeapon();
}, [])

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
              let name = data.name;
              let desc = data.desc ?? [];
              let dice = data.damage?.damage_dice ?? "";
              let type = data.damage?.damage_type.name ?? "";
              let category = data.weapon_category ?? "";
              let rarity = data.rarity?.name ?? "";
              let properties = data.properties ?? [];
              setArmory( prev => ( {
                ...prev,
                weapons: [...prev.weapons, {
                  name,
                  desc,
                  dice,
                  type,
                  category,
                  rarity,
                  properties
                }]
              }))
          })
      })
  } catch( err ) {
      console.log( err );
  }
}

  return (
    <div className={s.root}>
      <Router>
        <header>
          <div className={s.topRow}>
            <div className={s.titles}>
              <img src={dragon} width="50px" />
              <h1><span>(Dungeons and)<br/></span> Dragon Game</h1>
            </div>
            <Link to="/dragon-game/" >Credits</Link>
          </div>

          <nav>
            <Link to="/dragon-game/armory">Armory</Link>
            <Link to="/dragon-game/arena">Arena</Link>
            <Link to="/dragon-game/journal">Journal</Link>
          </nav>
        </header>


        <main>
          <Routes>
            <Route path="/dragon-game/" element={<Credits/>} />
            <Route path="/dragon-game/arena" element={<Arena player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} setArmory={setArmory} setJournal={setJournal}/>} />
            <Route path="/dragon-game/armory" element={<Armory armory={armory}/>} />
            <Route path="/dragon-game/journal" element={<Journal journal={journal}/>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
