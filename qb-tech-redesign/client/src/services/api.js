import axios from 'axios';

const API = axios.create({
    baseURL: '/api' // This uses the proxy set in package.json
});

export const fetchJobs = () => API.get('/jobs');
export const sendInquiry = (formData) => API.post('/contact', formData);