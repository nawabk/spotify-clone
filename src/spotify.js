export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = 'd9266ca53ec94d76bd97daf4a60b56da';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

export const playback_access_token =
  'BQAQ7AAi-mCtGydN1rRAkquqb2wDFKLIGAdYOA9-_eVZxAfE__JULWr9tTQqPt9sZBSJ8erFExVDSQiBn3gbbD0GTnM5yKYiDRI3KICPU8OPEFzCljGhPz-E_qnLdfExi7asQlMFB6so_EQZU1BqlIxEsQgG-IQvyY9AdyyPRfX3N2Nwqko';
