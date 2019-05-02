import axios from 'axios';
import queryString from 'query-string';


export const login = (email,password) => axios.get(`/api/users/?${queryString.stringify({email, password})}`);
export const join = (name,email,password,profile) => axios.post('/api/users',{name,email,password,profile});