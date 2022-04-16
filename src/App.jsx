import React, { useState} from 'react'
import './App.css'
import menu from './assets/menu.svg'
import close from './assets/close.svg'
import Arena from './components/Arena/Arena'
import Menu from './components/Menu/Menu'

function App() {
  const [seeMenu, setSeeMenu] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>play some DND!</h1>
        <img src={!seeMenu? menu : close} alt="Menu Icon" id="menu-toggle" width="50px" onClick={() => setSeeMenu(prev => !prev)}/>
      </header>
      { seeMenu? <Menu /> : ""}
      <Arena/>
    </div>
  )
}

export default App
