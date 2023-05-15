import React from 'react';
import { IconContext } from 'react-icons';
import { BiFolder } from 'react-icons/bi';
import './FavouriteFolder.scss';

const FavouriteFolder = ({name}) => {
  return (
    <div className={`favourite-folder`}>
        <IconContext.Provider value={{ className: 'favourite-folder__icon' }}>
            <BiFolder />
        </IconContext.Provider>
        <button
            className='favourite-folder__name'
            onClick={() => console.log('clicked')}
        >
            {name}
        </button>
    </div>
  )
}

export default FavouriteFolder