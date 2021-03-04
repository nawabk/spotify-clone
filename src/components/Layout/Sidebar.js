import React from 'react';
import { NavLink } from 'react-router-dom';

import SpotifyLogo from '../../assets/images/Spotify_Logo_RGB_White.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__img">
        <img
          src={SpotifyLogo}
          alt="SpotifyLogo_White"
          className="sidebar__logo"
        />
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/home" className="sidebar__link">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/search" className="sidebar__link">
            <i className="fas fa-search"></i>
            <span>Search</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/library" className="sidebar__link">
            <i className="fas fa-book-open"></i>
            <span>Your Library</span>
          </NavLink>
        </li>
      </ul>
      <p className="sidebar__subheading">Playlist</p>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/playlist" className="sidebar__link">
            <i className="fas fa-plus-square"></i>
            <span>Create Playlist</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
