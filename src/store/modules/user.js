import { createAction, handleActions } from 'redux-actions';
 
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';


// action types
const LOGIN = 'user/LOGIN';
const JOIN  = 'user/JOIN';
const LOGOUT  = 'user/LOGOUT';

// action creators
export const login = createAction(LOGIN,api.login);
export const join = createAction(JOIN,api.join);
export const logout = createAction(LOGOUT);

// initial state
const initialState = Map({
    name: '',
    profile: ''
  });

// reducer
export default handleActions({
  [LOGOUT]: (state, action) => initialState,
  ...pender({
    type: [LOGIN],
    onSuccess: (state, action) => {
      console.log(action.payload);
      const { name,profile } = action.payload.data.data;
      return state.set('name', name).set('profile',profile);
    }
  })
}, initialState)