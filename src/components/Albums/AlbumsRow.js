import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Album from '../Album/Album';

const AlbumsRow = ({ albums }) => {
  const history = useHistory();
  return (
    <div className="albums-row">
      <div className="albums-row__header">
        <div>
          <h2 className="albums-row__title">Categories</h2>
          <p className="albums-row__description">Lorem, ipsum dolor.</p>
        </div>
        <Link to="/" className="albums-row__link">
          See All
        </Link>
      </div>
      <div className="albums-row__albums">
        {albums.map((album) => (
          <div className="albums-row__album" key={album.id}>
            <Album
              name={album.name}
              description={album.description}
              icon={album.icons[0]}
              onClick={() => history.push(`/playlist/${album.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AlbumsRow.propTypes = {
  albums: PropTypes.array,
};

export default AlbumsRow;
