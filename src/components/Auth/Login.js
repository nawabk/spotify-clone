import React from 'react';

import { loginUrl } from '../../spotify';
import SpotifyLogo from '../../assets/images/Spotify_Logo_RGB_Green.png';
const Login = () => {
  return (
    <div className="login">
      <img src={SpotifyLogo} alt="Spotify Logo" className="login__logo" />
      <h2 className="login__heading">Feel the music</h2>
      <p className="login__text">Lorem ipsum dolor sit amet consectetur.</p>
      <a href={loginUrl} className="button__link login__button">
        Get Started
      </a>
    </div>
  );
};

export default Login;
