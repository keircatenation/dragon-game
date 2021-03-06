import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useFetch } from "use-http";
import Arena from './components/Arena/Arena';
import Credits from './components/Credits/Credits';
import Armory from './components/Armory/Armory';
import Journal from './components/Journal/Journal';
import s from './app.module.scss';
import dragon from './assets/dragon-favicon.svg';

function App() {
  const [enemy, setEnemy] = useState({
    name: "",
    armor:10,
    health:10,
    maxhp:10,
    actions:[],
    challenge:1
  });
  const [player, setPlayer] = useState({
    level:1,
    rightHand:{},
    leftHand:{},
    equipped: [],
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
  useEffect(() => {
    getWeapon();
  }, [])

  const { get, post, response, loading, error } = useFetch("https://www.dnd5eapi.co");

  // adding things to data
  function addArmor( armor ) {
    setArmory(prev => ({
      ...prev,
      armor: [...prev.armor, armor]
    }))
  }
  function addEnemyToJournal(enemy) {
    let e = {
      name: enemy.name,
      challenge: enemy.challenge
    }
    setJournal( prev => [...prev, e])
  }
  function addShield( shield ) {
    setArmory(prev => ({
      ...prev,
      shields: [...prev.shields, shield]
    }))
  }
  function addWeapon( weapon ) {
    setArmory(prev => ({
      ...prev,
      weapons: [...prev.weapons, weapon]
    }))
  }
  
  // getting things from the API
  async function getEnemy( challenge=1 ) {
    let url;
    const manyEnemies = await get(`/api/monsters?challenge_rating=${challenge}`);
    if (response.ok) {
      let index = Math.floor( Math.random() * manyEnemies.count );
      url = manyEnemies.results[index].url;
    }
    
    let enemy = await get(url);
    if (response.ok){
      let actions = enemy.actions.filter( action => {
        if ( action.damage && action.damage.length > 0 ) {
          return action;
        }
      } );
      setEnemy({
        name: enemy.name,
        armor: enemy.armor_class,
        health: enemy.hit_points,
        maxhp: enemy.hit_points,
        actions: actions,
        challenge: challenge
      })
    }
  }
  async function getWeapon( category="weapon" ) {
    let url;
    const allWeapons = await get(`/api/equipment-categories/${category}`);
    if (response.ok) {
      let index = Math.floor( Math.random()*allWeapons.equipment.length )
      url = allWeapons.equipment[index].url;
    }
    const data = await get(url);
    if (response.ok) {
      let weapon = {
        name: data.name,
        desc: data.desc ?? [],
        dice: data.damage?.damage_dice ?? "",
        type: data.damage?.damage_type.name ?? "",
        category: data.weapon_category ?? "",
        rarity: data.rarity ?? "",
        properties: data.properties ?? [],
        equipped: false
      }
      addWeapon( weapon );
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
            <Route
              path="/dragon-game/"
              element={<Credits/>}
            />
            <Route
              path="/dragon-game/arena"
              element={
                <Arena
                  player={player}
                  setPlayer={setPlayer}
                  enemy={enemy}
                  getEnemy={getEnemy}
                  addShield={addShield}
                  addArmor={addArmor}
                  addEnemyToJournal={addEnemyToJournal}
                  getWeapon={getWeapon}
                  loading={loading}
                />
              }
            />
            <Route path="/dragon-game/armory" element={<Armory armory={armory} setPlayer={setPlayer}/>} />
            <Route path="/dragon-game/journal" element={<Journal journal={journal}/>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
