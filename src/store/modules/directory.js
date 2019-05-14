import { createAction, handleActions } from "redux-actions";

import { Map, List, fromJS } from "immutable";
import { pender } from "redux-pender";
import * as api from "lib/api";
import { list } from "postcss";

// action types
const SHARED_LIST = "user/SHARED_LIST";
const PRIVATE_LIST = "user/PRIVATE_LIST";
const FILE_LIST = "user/FILE_LIST";
const CREATE_FOLDER="user/CREATE_FOLDER";
const DELETE_FOLDER="user/DELETE_FOLDER";
// action creators
export const getSharedList = createAction(SHARED_LIST, api.getSharedList);
export const getPrivateList = createAction(PRIVATE_LIST, api.getPrivateList);

export const createFolder = createAction(CREATE_FOLDER, api.createFolder);
export const deleteFolder =  createAction(DELETE_FOLDER, api.deleteFolder);

export const getFileList = createAction(FILE_LIST, api.getFileList);
// initial state
const initialState = Map({
    sharedList: [],
    privateList: [],
    fileList: []
});

// reducer
export default handleActions(
    {
        ...pender(
            {
                type: [PRIVATE_LIST],
                onSuccess: (state, action) => {
                    const { data: privateList } = action.payload.data;
                    console.log("PRIVATE_LIST",privateList);
                    console.log("PRIVATE_LIST_Payload",action.payload);
                    return state.set("privateList", privateList);
                }
            }),
            ...pender(
            {
                type: [SHARED_LIST],
                onSuccess: (state, action) => {
                    const { data: sharedList } = action.payload.data;
                    console.log("SHARED_LIST",sharedList);
                    return state.set("sharedList", sharedList);
                }
            }),
            ...pender(
            {
                type: [FILE_LIST],
                onSuccess: (state, action) => {
                    const { data: fileList } = action.payload;
                    return state.set("fileList", fromJS(fileList));
                }
            })
    },
    initialState
);
