import React from 'react';
import { useHistory } from 'react-router-dom';

import Album from '../Album/Album';

const Playlists = ({ title, playlists }) => {
  const history = useHistory();
  return (
    <div className="playlists">
      <h2 className="playlists__title">{title}</h2>
      <div className="playlists__content">
        {playlists.map((playlist) => (
          <div className="playlists__item" key={playlist.id}>
            <Album
              icon={playlist.images[0]}
              name={playlist.name}
              description={playlist.description}
              onClick={() => history.push(`/playlist/${playlist.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
