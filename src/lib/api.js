import axios from 'axios';
import queryString from 'query-string';

export const login = (email,password) => axios.post('/login',{email, password});
export const join = (name,email,password,profile) => axios.post('/join',{name,email,password,profile});
export const getSharedList = (user_id) => axios.get(`/folder/shared?${queryString.stringify({user_id})}`);
export const getPrivateList = (user_id) => axios.get(`/folder/private?${queryString.stringify({user_id})}`);

export const createFolder = (name,user_id) => axios.post('/folder',{name,user_id});
export const deleteFolder = (folder_id) => axios.delete(`/folder/${folder_id}`);
export const sharedFolder = (user_id,folder_id,permission) => axios.post('/folder/shared',{user_id,folder_id,permission});

export const getNoteList = (folder_id) => axios.get(`/note/list?${queryString.stringify({folder_id})}`);