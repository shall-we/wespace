import axios from 'axios';
import queryString from 'query-string';

const config={headers:{"Content-Type":"application/json"}};
export const login = (email,password) => axios.post('/login',{email, password},config);
export const join = (name,email,password,profile) => axios.post('/join',{name,email,password,profile},config);
export const getPublicList = (id) => axios.get(`/api/folder/shared/?${queryString.stringify({id})}`,config);
export const getPrivateList = (id) => axios.get(`/api/folder/private/?${queryString.stringify({id})}`,config);
export const getFileList = (folderId) => axios.get(`/api/note/list/?${queryString.stringify({folderId})}`,config);
