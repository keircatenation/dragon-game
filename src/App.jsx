import React, { useState, useEffect } from 'react';
import {useDragonStore} from './DragonStore';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useFetch } from "use-http";
import Arena from './components/Arena/Arena';
import Credits from './components/Credits/Credits';
import Armory from './components/Armory/Armory';
import Journal from './components/Journal/Journal';
import s from './app.module.scss';
import dragon from './assets/dragon-favicon.svg';

function App() {
  const setEnemy = useDragonStore( (state) => state.setEnemy );
  const addWeapon = useDragonStore( (state) => state.addWeapon );
  const addArmor = useDragonStore( (state) => state.addArmor );

  useEffect(() => {
    getWeapon();
  }, [])

  const { get, post, response, loading, error } = useFetch("https://www.dnd5eapi.co");

  
  // getting things from the API
  async function getEnemy( challenge=0.125 ) {
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
        armor: enemy.armor_class[0].value,
        health: enemy.hit_points,
        maxhp: enemy.hit_points,
        action: actions[0],
        challenge: challenge
      })
    }
  }
  async function getWeapon() {
    let url;
    const allWeapons = await get(`/api/equipment-categories/simple-weapons`);
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
        atkBonus: 0,
        category: data.weapon_category ?? "",
        rarity: data.rarity ?? "",
        properties: data.properties ?? []
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
            <Link to="/dragon-game/credits" >Credits</Link>
          </div>

          <nav>
            <Link to="/dragon-game/armory">Armory</Link>
            <Link to="/dragon-game/">Arena</Link>
            <Link to="/dragon-game/journal">Journal</Link>
          </nav>
        </header>


        <main>
          <Routes>
            <Route
              path="/dragon-game/credits"
              element={<Credits/>}
            />
            <Route
              path="/dragon-game/"
              element={
                <Arena
                  getEnemy={getEnemy}
                  loading={loading}
                />
              }
            />
            <Route path="/dragon-game/armory" element={<Armory />} />
            <Route path="/dragon-game/journal" element={<Journal/>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
