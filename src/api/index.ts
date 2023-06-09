import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API, // Substitua com a URL base da sua API
});

export default api;