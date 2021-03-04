import React, { useReducer } from 'react';
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  saveTokenInLocalStorage,
} from '../components/shared/shared';

const AuthStateContext = React.createContext({
  validatingAuth: true,
  isAuthenticated: false,
  access_token: null,
});

const AuthDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        validatingAuth: false,
        isAuthenticated: true,
        access_token: action.payload,
      };
    case 'LOGIN_FAIL':
    case 'LOGOUT':
      return {
        ...state,
        validatingAuth: false,
        isAuthenticated: false,
        access_token: null,
      };
    default:
      throw new Error('This action is not handled');
  }
};
const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    validatingAuth: true,
    access_token: null,
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error(
      'useAuthState context can be used inside the AuthContextProvider'
    );
  }
  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error(
      'userAuthDispatch context can be used inside the AuthenticationProvider'
    );
  }
  return context;
}

export { AuthContextProvider, useAuthState, useAuthDispatch };

export const validateAuth = (dispatch) => {
  const token = getTokenFromLocalStorage();
  if (token) {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: token,
    });
  } else {
    dispatch({
      type: 'LOGIN_FAIL',
    });
  }
};

export const login = (dispatch, token, callback) => {
  saveTokenInLocalStorage(token);
  dispatch({
    type: 'LOGIN_SUCCESS',
    payload: token,
  });
  callback && callback();
};

export const logout = (dispatch) => {
  removeTokenFromLocalStorage();
  dispatch({
    type: 'LOGOUT',
  });
};
