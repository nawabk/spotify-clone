import moment from 'moment';

export const saveTokenInLocalStorage = (token) => {
  localStorage.setItem('access_token', token);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token');
};

export const getTokenFromLocalStorage = () =>
  localStorage.getItem('access_token');

export const getAuthHeader = () => {
  const access_token = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
};

export const BASE_URL = 'https://api.spotify.com/v1';

export const slugify = (str) => {
  if (!str) throw new Error('Cannot slugify an empty string');
  return str.toLowerCase().split(' ').join('-');
};

export const calculateTimeElapse = (date) => {
  if (date) {
    return moment(date).fromNow();
  }
};

export const convertMilliSecToHoursAndMinutes = (milliseconds) => {
  if (!milliseconds) return;
  let value = '';
  const duration = moment.duration(milliseconds);
  if (duration.hours() > 0) {
    value += duration.hours();
  }
  if (duration.minutes() > 0) {
    value !== '' ? (value += ':') : (value += '');
    value += duration.minutes();
  }
  if (duration.seconds()) {
    value += ':';
    value += duration.seconds();
  }
  return value;
};
