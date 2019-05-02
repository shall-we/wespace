import axios from 'axios';
import queryString from 'query-string';


<<<<<<< HEAD
export const login = (email,password) => axios.post('/login',{email, password});
export const join = (name,email,password,profile) => axios.post('/join',{name,email,password,profile});
=======
export const login = (email,password) => axios.get(`/api/users/?${queryString.stringify({email, password})}`);
export const join = (name,email,password,profile) => axios.post('/api/users',{name,email,password,profile});
export const getPublicList = (id) => axios.get(`/api/folder/shared/?${queryString.stringify({id})}`);
export const getPrivateList = (id) => axios.get(`/api/folder/private/?${queryString.stringify({id})}`);
export const getFileList = (folderId) => axios.get(`/api/note/list/?${queryString.stringify({folderId})}`);
>>>>>>> 56d4bb1132011c8a3079f96116fab64e62e88646
