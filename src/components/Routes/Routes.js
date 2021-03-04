import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SpotifyHome from '../SpotfiyHome/SpotifyHome';
import Playlist from '../PlayList/Playlist';
import Tracks from '../Tracks/Tracks';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={SpotifyHome} />
      <Route path="/search" render={() => <div>Search</div>} />
      <Route path="/library" render={() => <div>Library</div>} />
      <Route path="/albums/:playlistId" component={Playlist} />
      <Route path="/playlist/:playlistId" component={Tracks} />
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default Routes;
