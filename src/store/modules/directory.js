import { createAction, handleActions } from "redux-actions";

import { Map, List, fromJS } from "immutable";
import { pender } from "redux-pender";
import * as api from "lib/api";

// action types
const SHARED_LIST = "user/SHARED_LIST";
const PRIVATE_LIST = "user/PRIVATE_LIST";
const FILE_LIST = "user/FILE_LIST";

// action creators
export const getSharedList = createAction(SHARED_LIST, api.getSharedList);
export const getPrivateList = createAction(PRIVATE_LIST, api.getPrivateList);
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
                type: [SHARED_LIST],
                onSuccess: (state, action) => {
                    const { data: sharedList } = action.payload.data;
                    console.log("action 확인", action.payload.data);
                    console.log("sharedList", sharedList);
                    return state.set("sharedList", sharedList);
                }
            },
            {
                type: [PRIVATE_LIST],
                onSuccess: (state, action) => {
                    const { data: privateList } = action.payload.data;
                    return state.set("privateList", fromJS(privateList));
                }
            },
            {
                type: FILE_LIST,
                onSuccess: (state, action) => {
                    const { data: fileList } = action.payload;
                    return state.set("fileList", fromJS(fileList));
                }
            }
        )
    },
    initialState
);
