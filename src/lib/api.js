import axios from 'axios';
import queryString from 'query-string';

export const login = (email,password) => axios.get(`/api/login/?${queryString.stringify({email, password})}`);
export const join = (name,email,password,profile) => axios.post('/api/join',{name,email,password,profile});