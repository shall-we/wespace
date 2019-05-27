import { createAction, handleActions } from 'redux-actions';
 
<<<<<<< HEAD
import { Map,List,fromJS } from 'immutable';
=======
import { Map } from 'immutable';
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
import { pender } from 'redux-pender';
import * as api from '../../lib/api';


// action types
const LOGIN = 'user/LOGIN';
const JOIN  = 'user/JOIN';
const LOGOUT  = 'user/LOGOUT';
<<<<<<< HEAD
const GET_USER_LIST = "user/GET_USER_LIST";
=======
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46

// action creators
export const login = createAction(LOGIN,api.login);
export const join = createAction(JOIN,api.join);
export const logout = createAction(LOGOUT);
<<<<<<< HEAD
export const getUserList = createAction(GET_USER_LIST, api.getUserList);
=======
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46

// initial state
const initialState = Map({
    id: '',
    name: '',
<<<<<<< HEAD
    profile: '',
    user_list: []
});
=======
    profile: ''
  });
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46

// reducer
export default handleActions({
  [LOGOUT]: (state, action) => initialState,
  ...pender({
    type: [LOGIN],
    onSuccess: (state, action) => {
      const { name,profile,id } = action.payload.data.data;
      return state.set('name', name).set('profile',profile).set('id', id);
    }
<<<<<<< HEAD
  }),
  ...pender({
    type: [GET_USER_LIST],
    onSuccess: (state, action) => {
        const { data: user_list } = action.payload.data;
        console.log("[user.js] ", user_list);
        return state.set("user_list",user_list);
    }
  }),
}, initialState);
=======
  })
}, initialState)
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
