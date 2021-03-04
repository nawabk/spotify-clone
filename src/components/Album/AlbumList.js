import React from 'react';
import { useHistory } from 'react-router-dom';

import Album from './Album';

const AlbumList = ({ title, albums }) => {
  const history = useHistory();

  return (
    <div className="album-list">
      <h2 className="album-list__title">{title}</h2>
      <div className="album-list__content">
        {albums.map((album) => (
          <div className="album-list__item" key={album.id}>
            <Album
              name={album.name}
              description={album.description}
              icon={album.icons[0]}
              onClick={() => history.push(`/albums/${album.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
