<<<<<<< HEAD
// createAction: 액션생성 자동화
=======
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";
import * as api from "lib/api";

// action types
const SHARED_LIST = "directory/SHARED_LIST";
const PRIVATE_LIST = "directory/PRIVATE_LIST";
const NOTE_LIST = "directory/NOTE_LIST";

<<<<<<< HEAD
// folder CRUD of action types
const CREATE_FOLDER = "directory/CREATE_FOLDER";
const UPDATE_FOLDER = "directory/UPDATE_FOLDER";
const DELETE_FOLDER = "directory/DELETE_FOLDER";

const SHARED_FOLDER = "directory/SHARED_FOLDER";
const UNSHARED_FOLDER = "directory/UNSHARED_FOLDER";
=======
const CREATE_FOLDER="directory/CREATE_FOLDER";
const DELETE_FOLDER="directory/DELETE_FOLDER";
const SHARED_FOLDER="directory/SHARED_FOLDER";
const UPDATE_FOLDER="directory/UPDATE_FOLDER";
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46

const CREATE_NOTE="directroy/CREATE_NOTE";
const UPDATE_NOTE="directory/UPDATE_NOTE";
const DELETE_NOTE="directory/DELETE_NOTE";
const SET_NOTE="directory/SET_NOTE";
const SET_FOLDER="directory/SET_FOLDER";



// action creators
export const getSharedList = createAction(SHARED_LIST, api.getSharedList);
export const getPrivateList = createAction(PRIVATE_LIST, api.getPrivateList);
export const getNoteList = createAction(NOTE_LIST, api.getNoteList);

export const createFolder = createAction(CREATE_FOLDER, api.createFolder);
<<<<<<< HEAD
export const updateFolder = createAction(UPDATE_FOLDER, api.updateFolder);
export const deleteFolder = createAction(DELETE_FOLDER, api.deleteFolder);
export const sharedFolder = createAction(SHARED_FOLDER, api.sharedFolder);
export const unsharedFolder = createAction(UNSHARED_FOLDER, api.unsharedFolder);
=======
export const deleteFolder =  createAction(DELETE_FOLDER, api.deleteFolder);
export const sharedFolder = createAction(SHARED_FOLDER,api.sharedFolder);
export const updateFolder = createAction(UPDATE_FOLDER, api.updateFolder);
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46

export const createNote = createAction(CREATE_NOTE, api.createNote);
export const updateNote = createAction(UPDATE_NOTE, api.updateNote);
export const deleteNote = createAction(DELETE_NOTE, api.updateNoteStatusDeleted);
<<<<<<< HEAD

=======
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
export const setNote = createAction(SET_NOTE);
export const setFolder = createAction(SET_FOLDER);


<<<<<<< HEAD

=======
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
// initial state
const initialState = Map({
    sharedList: [],
    privateList: [],
    noteList: [],
<<<<<<< HEAD
    folder: null,
    note: null,
});



// reducer
export default handleActions({
    ...pender(
    {
        type: [PRIVATE_LIST],
        onSuccess: (state, action) => {
            const { data: privateList } = action.payload.data;
            return state.set("privateList", privateList);
        }
    }),
    ...pender(
    {
        type: [SHARED_LIST],
        onSuccess: (state, action) => {
            const { data: sharedList } = action.payload.data;
            return state.set("sharedList", sharedList); 
        }
    }),
    ...pender(
    {
        type: [NOTE_LIST],
        onSuccess: (state, action) => {
            const { data: noteList } = action.payload.data;
            return state.set("noteList", noteList);
        }
    }),
    [SET_NOTE]: (state, action) => {
        const { payload: note } = action;
        return state.set('note', note);
    },
    [SET_FOLDER]: (state, action) => {
        const { payload: folder } = action;
        console.log("SET_FOLDER", folder);
        return state.set('folder', folder);
    },

}, initialState);
=======
    folder:null,
    note:null
});

// reducer
export default handleActions(
    {
            ...pender(
            {
                type: [PRIVATE_LIST],
                onSuccess: (state, action) => {
                    const { data: privateList } = action.payload.data;
                    return state.set("privateList", privateList);
                }
            }),
            ...pender(
            {
                type: [SHARED_LIST],
                onSuccess: (state, action) => {
                    const { data: sharedList } = action.payload.data;
                    return state.set("sharedList", sharedList); 
                }
            }),
            ...pender(
            {
                type: [NOTE_LIST],
                onSuccess: (state, action) => {
                    const { data: noteList } = action.payload.data;
                    return state.set("noteList", noteList);
                }
            }),
            [SET_NOTE]: (state, action) => {
                const { payload: note } = action;
                return state.set('note', note);
            },
            [SET_FOLDER]: (state, action) => {
                const { payload: folder } = action;
                console.log("SET_FOLDER",folder);
                return state.set('folder', folder);
            },
    },
    initialState
);
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
