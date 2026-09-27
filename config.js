const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'https://logos-backend-production-e529.up.railway.app/api'
    : 'https://logos-backend-production-e529.up.railway.app/api';

export default API_URL;