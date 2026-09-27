// ملف إعدادات الروابط للإنتاج والتطوير
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'                  
    : 'https://logos-backend-production-e529.up.railway.app';