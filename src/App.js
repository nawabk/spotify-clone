import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './assets/styles/main.scss';
import Login from './components/Auth/Login';
import MainLayout from './components/Layout/MainLayout';
import {
  useAuthState,
  useAuthDispatch,
  validateAuth,
} from './context/auth-context';
import AccessToken from './components/AccessToken/AccessToken';

const App = () => {
  const { isAuthenticated, validatingAuth } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    validateAuth(dispatch);
  }, [dispatch]);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      window.connect().then((success) => {
        console.log('The Web Playback SDK successfully connected to Spotify!');
      });
    };
  }, []);

  const userEntry = !validatingAuth ? (
    isAuthenticated ? (
      <Route path="/" component={MainLayout} />
    ) : (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={AccessToken} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    )
  ) : (
    <React.Fragment />
  );
  return userEntry;
};

export default App;
