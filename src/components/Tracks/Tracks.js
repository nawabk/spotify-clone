import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { BASE_URL, getAuthHeader } from '../shared/shared';
import Track from './Track';
import { useAuthState } from '../../context/auth-context';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';

const Tracks = ({ match }) => {
  const [tracks, setTracks] = useState([]);
  const [albumDetails, setAlbumDetails] = useState(null);
  const { access_token } = useAuthState();
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const constructAlbumDetails = (data) => {
      const {
        name,
        description,
        images: [imgSrc],
        tracks: { total: totalSong },
        owner: { display_name: ownerName },
        type,
      } = data;
      setAlbumDetails({
        name,
        description,
        imgSrc,
        totalSong,
        ownerName,
        type,
      });
    };
    async function fetchAllTracks() {
      try {
        const res = await axios.get(
          `${BASE_URL}/playlists/${match.params.playlistId}`,
          getAuthHeader()
        );
        setTracks(res.data.tracks.items);
        constructAlbumDetails(res.data);
        setSelectedTrack(res.data.tracks.items[0].track);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAllTracks();
  }, [match]);
  return (
    <div className="tracks">
      {albumDetails && <AlbumDetails albumDetails={albumDetails} />}
      {tracks.length > 0 && <TrackList tracks={tracks} />}
      <div className="track-player">
        {selectedTrack && <SpotifyPlayer track={selectedTrack} />}
      </div>
    </div>
  );
};

const AlbumDetails = ({ albumDetails }) => {
  const {
    imgSrc: { url },
    name,
    description,
    ownerName,
    totalSong,
    type,
  } = albumDetails;
  console.log(albumDetails);
  return (
    <div className="tracks__album">
      <img src={url} alt="album-img" className="tracks__album-img" />
      <div className="tracks__album-details">
        <h2 className="tracks__album-type">{type}</h2>
        <h1 className="tracks__album-name">{name}</h1>
        <p className="tracks__album-description">{description}</p>
        <div className="tracks__album-meta">
          <span className="tracks__album-owner">{ownerName}</span>
          <span className="dot"></span>
          <span className="tracks__album-totalSong">{totalSong}</span>
        </div>
      </div>
    </div>
  );
};

export const TrackList = ({ tracks }) => {
  return (
    <div className="track-list">
      <div className="track-list-header">
        <div className="track-list-header__sequence">#</div>
        <div className="track-list-header__title">Title</div>
        <div className="track-list-header__album">Album</div>
        <div className="track-list-header__date-added">Date Added</div>
        <div className="track-list-header__date-added">Duration</div>
      </div>
      <br />
      <div className="track-list-body">
        {tracks.map((elem, index) => {
          const { added_at, track } = elem;
          return (
            <Track
              track={track}
              added_at={added_at}
              index={index}
              key={track.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;
