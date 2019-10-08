import axios from 'axios';
import {urlBackend} from '../config/cfg.json';

const api = axios.create({
    baseURL: urlBackend
});

export default api;