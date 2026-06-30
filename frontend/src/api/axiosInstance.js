import axios from 'axios';

const API = axios.create({
    baseURL: 'https://module-end-asgnmnt5.onrender.com/api',
});

export default API;
