import { createAction, handleActions } from 'redux-actions';
 
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';


// action types
const LOGIN = 'user/LOGIN';
const JOIN  = 'user/JOIN';

// action creators
export const login = createAction(LOGIN,api.login);
export const join = createAction(JOIN,api.join);

// initial state
const initialState = Map({
    name: '',
    profile: ''
  });

// reducer
export default handleActions({
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) => {
      const { name,profile } = action.payload.data;
      return state.set('name', name).set('profile',profile);
    }
  })
}, initialState)