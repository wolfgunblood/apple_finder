import React, { useState } from 'react'
import MenuBar from './components/MenuBar/MenuBar'
import './App.scss'
import Sidebar from './components/SideBar/Sidebar'
import Files from './components/Files/Files'
import Statusbar from './components/Statusbar/Statusbar'

const App = () => {

  const favourites = ["Home", "Documents", "Downloads", "Desktop"];

  return (
    <div className='window-container' id='window'>
      <div className='finder-container' id='finder'>
        <MenuBar />
        <div className='main-container' id='main'>
          <Sidebar 
            favourites={favourites}
          />
          <Files />

        </div>
        <Statusbar />
      </div>
    </div>
  )
}

export default App