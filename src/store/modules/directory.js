import { createAction, handleActions } from "redux-actions";

import { Map, List, fromJS } from "immutable";
import { pender } from "redux-pender";
import * as api from "lib/api";
import { list } from "postcss";

// action types
const SHARED_LIST = "directory/SHARED_LIST";
const PRIVATE_LIST = "directory/PRIVATE_LIST";
const NOTE_LIST = "directory/NOTE_LIST";
const CREATE_FOLDER="directory/CREATE_FOLDER";
const DELETE_FOLDER="directory/DELETE_FOLDER";
const SHARED_FOLDER="directory/SHARED_FOLDER"

// action creators
export const getSharedList = createAction(SHARED_LIST, api.getSharedList);
export const getPrivateList = createAction(PRIVATE_LIST, api.getPrivateList);

export const createFolder = createAction(CREATE_FOLDER, api.createFolder);
export const deleteFolder =  createAction(DELETE_FOLDER, api.deleteFolder);
export const sharedFolder = createAction(SHARED_FOLDER,api.sharedFolder)


export const getNoteList = createAction(NOTE_LIST, api.getNoteList);
// initial state
const initialState = Map({
    sharedList: [],
    privateList: [],
    noteList: []
});

// reducer
export default handleActions(
    {
        ...pender(
            {
                type: [PRIVATE_LIST],
                onSuccess: (state, action) => {
                    const { data: privateList } = action.payload.data;
                    console.log("privateList : ",privateList);
                    return state.set("privateList", privateList);
                }
            }),
            ...pender(
            {
                type: [SHARED_LIST],
                onSuccess: (state, action) => {
                    const { data: sharedList } = action.payload.data;
                    console.log("shared : ",sharedList);
                    return state.set("sharedList", sharedList); 
                }
            }),
            ...pender(
            {
                type: [NOTE_LIST],
                onSuccess: (state, action) => {
                    const { data: noteList } = action.payload.data;
                    console.log("payload : "+action.payload)
                    return state.set("noteList", noteList);
                }
            })
    },
    initialState
);
