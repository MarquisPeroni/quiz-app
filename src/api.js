import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true, 
    withXSRFToken: true,
});


export const getCsrfToken = async () => {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
};

export default api;

