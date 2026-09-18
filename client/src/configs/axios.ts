import axios from "axios";

const api = axios.create({    
    baseURL: import.meta.env.VITE_BASEURL || 'https://ugc-ai-ads.onrender.com'
})

export default api;
