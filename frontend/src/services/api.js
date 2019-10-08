import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aircnc-meme.herokuapp.com/',
});

export default api;