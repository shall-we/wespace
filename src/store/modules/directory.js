import { createAction, handleActions } from 'redux-actions';
 
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const PUBLICLIST = 'user/PUBLICLIST';
const PRIVATELIST  = 'user/PRIVATELIST';
const FILELIST  = 'user/FILELIST';

// action creators
export const getPublicList = createAction(PUBLICLIST, api.getPublicList);
export const getPrivateList = createAction(PRIVATELIST, api.getPrivateList);
export const getFileList = createAction(FILELIST, api.getFileList);

// initial state
const initialState = Map({
    publicList: List(),
    privateList: List(),
    fileList: List(),
  });

// reducer
export default handleActions({
  ...pender({
      type: PUBLICLIST,
      onSuccess: (state, action) => {
          const {data:publicList} = action.payload
          return state.set('publicList',fromJS(publicList));
      }
  },{
    type: PRIVATELIST,
    onSuccess: (state, action) => {
        const {data:privateList} = action.payload;
        return state.set('privateList',fromJS(privateList));
    }
  },{
    type: FILELIST,
    onSuccess: (state, action) => {
        const {data:fileList} = action.payload;
        return state.set('fileList',fromJS(fileList));
    }
  })
}, initialState)