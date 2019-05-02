import axios from 'axios';
import queryString from 'query-string';


export const login = (email,password) => axios.post('/login',{email, password});
export const join = (name,email,password,profile) => axios.post('/join',{name,email,password,profile});