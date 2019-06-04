import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import * as api from "../../lib/api";
import { Map } from "immutable";

// action types
const GET_NOTICE_LIST = "admin/GET_NOTICE_LIST";
const CREATE_NOTICE = "admin/CREATE_NOTICE";
const GET_NOTICE = "admin/GET_NOTICE";
const UPDATE_NOTICE = "admin/UPDATE_NOTICE";
const DELETE_NOTICE = "admin/DELETE_NOTICE";

const GET_NOTE_COUNT = "admin/GET_NOTE_COUNT";

// action creators
export const getNoticeList = createAction(GET_NOTICE_LIST, api.getNoticeList);
export const createNotice = createAction(CREATE_NOTICE, api.createNotice);
export const getNotice = createAction(GET_NOTICE, api.getNotice);
export const updateNotice = createAction(UPDATE_NOTICE, api.updateNotice);
export const deleteNotice = createAction(DELETE_NOTICE, api.deleteNotice);
export const getNoteCount = createAction(GET_NOTE_COUNT, api.getNoteCount);

// initial state
const initialState = Map({
  notice_list: []
});

// reducer
export default handleActions({
  ...pender({
    type: [GET_NOTICE_LIST],
    onSuccess: (state, action) => {
      const { data: notice_list } = action.payload.data;
      console.log("[admin.js] ", notice_list);
      return state.set("notice_list", notice_list);
    }
  }),
  ...pender({
    type: [GET_NOTE_COUNT],
    onSuccess: (state, action) => {
      const { data: note_count } = action.payload.data;
      console.log("[GET_NOTE_COUNT] ", note_count);
      return state.set("note_count", note_count);
    }
  }),
}, initialState);
