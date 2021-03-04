import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BASE_URL, getAuthHeader } from '../shared/shared';
import Playlists from './Playlists';

const Playlist = ({ match }) => {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    async function getAllPlayList() {
      try {
        const res = await axios.get(
          `${BASE_URL}/browse/categories/${match.params.playlistId}/playlists`,
          getAuthHeader()
        );
        const { playlists } = res.data;
        setPlaylists(playlists);
      } catch (err) {
        console.error(err);
      }
    }
    getAllPlayList();
  }, [match]);
  return playlists && <Playlists playlists={playlists.items} />;
};

export default Playlist;
