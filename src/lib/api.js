import axios from 'axios';
import queryString from 'query-string';

export const login = (email,password) => axios.post('/login',{email, password});
export const join = (name,email,password,profile) => axios.post('/join',{name,email,password,profile});
export const getSharedList = (user_id) => axios.get(`/folder/shared?${queryString.stringify({user_id})}`);
export const getPrivateList = (id) => axios.get(`/folder/private?${queryString.stringify({id})}`);
export const getFileList = (folderId) => axios.get(`/api/note/list?${queryString.stringify({folderId})}`);
