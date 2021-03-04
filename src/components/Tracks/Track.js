import React, { useState } from 'react';

import {
  calculateTimeElapse,
  convertMilliSecToHoursAndMinutes,
} from '../shared/shared';

const Track = ({ track, added_at, index }) => {
  const [hoverSequence, setHoverSequence] = useState(false);

  const toggleHover = () => {
    setHoverSequence((prevHover) => !prevHover);
  };
  return (
    <div
      className="track-list-body__track"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="track-list-body__sequence">
        {hoverSequence ? (
          <i className="fas fa-play"></i>
        ) : (
          <span>{index + 1}</span>
        )}
      </div>
      <div className="track-list-body__title">
        <img
          src={track.album.images[2].url}
          alt="song_img"
          className="track-list-body__image"
        />
        <div className="track-list-body__info">
          <p className="track-list-body__name">{track.name}</p>
          <div className="track-list-body__artists">
            <p className="track-list-body__artist">
              {track.artists.reduce((acc, curr) => {
                return acc === '' ? curr.name : acc + ', ' + curr.name;
              }, '')}
            </p>
          </div>
        </div>
      </div>
      <div className="track-list-body__album">{track.album.name}</div>
      <div className="track-list-body__date-added">
        {calculateTimeElapse(added_at)}
      </div>
      <div className="track-list-body__duration">
        {convertMilliSecToHoursAndMinutes(track.duration_ms)}
      </div>
    </div>
  );
};

export default Track;
