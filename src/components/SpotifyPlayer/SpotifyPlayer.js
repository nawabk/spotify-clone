import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { getAuthHeader, BASE_URL } from '../shared/shared';

const SpotifyPlayer = ({ track }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => {
    setPlaying((prevPlay) => !prevPlay);
  };

  useEffect(() => {
    async function playTrack() {
      //   try {
      //     const bodyParam = {
      //       context_uri: track.uri,
      //     };
      //     const res = await axios.put(
      //       `${BASE_URL}/me/player/play`,
      //       bodyParam,
      //       getAuthHeader()
      //     );
      //     console.log(res);
      //   } catch (err) {
      //     console.log(err);
      //   }
      const play = ({
        spotify_uri,
        playerInstance: {
          _options: { getOAuthToken },
        },
      }) => {
        fetch(`https://api.spotify.com/v1/me/player/play`, {
          method: 'PUT',
          body: JSON.stringify({ uris: [spotify_uri] }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
      };

      play({
        playerInstance: new window.Spotify.Player({
          name: 'Carly Rae Jepsen Player',
        }),
        spotify_uri: track.uri,
      });
    }
    if (playing) {
      playTrack();
    }
  }, [playing, track]);

  return (
    <div className="player">
      <div className="player__track-info">
        <img
          src={track.album.images[1].url}
          alt="player-track-img"
          className="player__img"
        />
        <div className="player__track-details">
          <p className="player__track-name">{track.name}</p>
          <p className="player__track-artists">
            {track.artists.reduce((acc, curr) => {
              return acc === '' ? curr.name : acc + ', ' + curr.name;
            }, '')}
          </p>
        </div>
      </div>
      <div className="player__main">
        <div className="player__controller">
          <div className="player__backward">
            <i className="fas fa-step-backward"></i>
          </div>
          <div className="player__play-resume" onClick={togglePlaying}>
            {playing ? (
              <i className="fas fa-pause"></i>
            ) : (
              <i className="fas fa-play"></i>
            )}
          </div>
          <div className="player__forward">
            <i className="fas fa-step-forward"></i>
          </div>
        </div>
        <div className="player__progress-info">
          <span className="player__time-at"></span>
          <div className="player__progress progress-bar"></div>
          <span className="player__duration"></span>
        </div>
      </div>
      <div className="player__volume">
        <span className="player__volume-icon">
          <i className="fas fa-volume-down"></i>
        </span>
        <div className="player__progress progress-bar"></div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
