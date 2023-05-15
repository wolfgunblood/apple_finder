import React from 'react';
import './MenuBar.scss';
import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";
import { IconContext } from "react-icons";
import { BiChevronLeftSquare, BiChevronRightSquare } from "react-icons/bi";

const MenuBar = () => {
  return (
    <header className='menu-bar' id='menu-bar'>
      <div className='windows-controls'>
        <button
          className='windows-control close-window'
        >
          <IconContext.Provider value={{ className: 'windows-control-icon', size: '1.5em' }}>
            <GrFormClose />
          </IconContext.Provider>
        </button>
        <button
          className='windows-control minimize-window'
        >
          <IconContext.Provider value={{ className: 'windows-control-icon', size: '1.5em' }}>
            <GrFormSubtract />
          </IconContext.Provider>
        </button>
        <button
          className='windows-control maximize-window'
        >
          <IconContext.Provider value={{ className: 'windows-control-icon', size: '1.5em' }}>
            <CgExpand />
          </IconContext.Provider>
        </button>
      </div>
      <div className='navigation-icon'>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <BiChevronLeftSquare />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <BiChevronRightSquare />
        </IconContext.Provider>
      </div>
      <p className='app-name'>🏠 FinderClone</p>
      <div className='search-container'>
        <input type="text" placeholder='Search...' />
      </div>
    </header>
  )
}

export default MenuBar