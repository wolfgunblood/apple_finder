import React from 'react';
import "./SideBar.scss";
import FavouriteFolder from '../FavoriteFolder/FavouriteFolder';

const Sidebar = ({ favourites }) => {
  return (
    <aside id="sidebar" className='sidebar-container'>
      <h5 className='favourites-title'>Favorites</h5>
      <div className='favourites-folder-container'>
        {favourites.map((favourite, index) => (
          <div className='favourites-folder' key={index}>
            <FavouriteFolder name={favourite} />
          </div>)
        )}
      </div>
    </aside>
  )
}

export default Sidebar