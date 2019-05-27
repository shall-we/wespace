import axios from 'axios';
import queryString from 'query-string';

export const login = (email,password) => axios.post('/login',{email, password});
export const join = (name,email,password,profile) => axios.post('/join',{name,email,password,profile});
<<<<<<< HEAD
export const getUserList = (folder_id) => axios.get(`/user?${queryString.stringify({folder_id})}`);

=======
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46

export const getSharedList = (user_id) => axios.get(`/folder/shared?${queryString.stringify({user_id})}`);
export const getPrivateList = (user_id) => axios.get(`/folder/private?${queryString.stringify({user_id})}`);
export const getNoteList = (folder_id) => axios.get(`/note/list?${queryString.stringify({folder_id})}`);

export const createFolder = (user_id,name) => axios.post('/folder',{name,user_id});
export const deleteFolder = (folder_id) => axios.delete(`/folder/${folder_id}`);
<<<<<<< HEAD

export const sharedFolder = (user_id,folder_id,permission) => axios.post('/folder/shared',{user_id,folder_id,permission});
export const unsharedFolder = (folder_id,user_id) => axios.delete(`/folder/shared/${folder_id}/${user_id}`);

=======
export const sharedFolder = (user_id,folder_id,permission) => axios.post('/folder/shared',{user_id,folder_id,permission});
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
export const updateFolder = (folder_id, folder_name) => axios.patch(`/folder/${folder_id}/${folder_name}`);

export const createNote = (folder_id,name) => axios.post('note',{folder_id,name});
export const updateNote = (note_id, note_name) => axios.patch(`note/${note_id}/${note_name}`);
<<<<<<< HEAD
export const updateNoteStatusDeleted = (note_id) => axios.patch(`/note/status/${note_id}/DELETED`);
=======
export const updateNoteStatusDeleted = (note_id) => axios.patch(`/note/status/${note_id}/DELETED`);
>>>>>>> bc7e2643f08d79c719a8a89ce15fae13d5429b46
