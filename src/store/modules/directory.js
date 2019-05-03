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
  
}, initialState)