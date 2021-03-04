import React from 'react';

import SpotifyIcon from '../../assets/images/Spotify_Icon_RGB_White.png';
import PlayButton from '../../assets/images/Green-play-button.png';

const Album = ({ icon, name, description, onClick }) => {
  return (
    <div className="album" onClick={onClick}>
      <img
        src={icon.url}
        height={icon.height}
        widht={icon.width}
        alt="album-img"
        className="album__img"
      />
      <img src={SpotifyIcon} alt="spotify-icon" className="album__icon" />
      <div className="album__play-button-wrapper">
        <img
          src={PlayButton}
          alt="play-button"
          className="album__play-button"
        />
      </div>
      <p className="album__name">{name}</p>
      <p className="album__description">{description || 'No Desciption'}</p>
    </div>
  );
};

export default Album;
