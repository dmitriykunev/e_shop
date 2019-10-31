import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOGOUT,
    TYPE_IN_EMAIL,
    TYPE_IN_LOGIN,
    TYPE_IN_PASSWORD,
    TYPE_IN_USERNAME,
    TOKEN_UPDATED,
    TOKEN_ABSENT
  } from '../constants/index';
  
  const initialState = {
    userName: '',
    login: '',
    email: '',
    password: '',
    token: '',
    role: 'user',
    error: ''
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case SIGN_IN:
        return state;
      case SIGN_IN_SUCCESS:
        return state;
      case SIGN_IN_FAIL:
        return state;
      case SIGN_UP:
        return state;
      case SIGN_UP_SUCCESS:
        return state;
      case SIGN_UP_FAIL:
        return state;
      case TYPE_IN_USERNAME:
        return state;
      case TYPE_IN_LOGIN:
        return state;
      case TYPE_IN_EMAIL:
        return state;
      case TYPE_IN_PASSWORD:
        return state;
    case TOKEN_UPDATED:
        return state;
    case TOKEN_ABSENT:
        return state;
      case LOGOUT:
        return state;
      default:
        return state;
    }
  }
  
  export default reducer;
  