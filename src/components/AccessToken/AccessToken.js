import React, { useEffect } from 'react';

import { useAuthDispatch, login } from '../../context/auth-context';

const AccessToken = ({ location }) => {
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (location.hash) {
      const [str1] = location.hash.split('&');
      const [, access_token] = str1.split('=');
      login(dispatch, access_token);
    }
  }, [location, dispatch]);

  return <React.Fragment />;
};

export default AccessToken;
