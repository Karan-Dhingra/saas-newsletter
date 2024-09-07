import axiosDefault from 'axios';

const BACKEND_URL = "http://localhost:5002"

const axios = axiosDefault.create({
    baseURL: BACKEND_URL
});

axios.interceptors.request.use(async (config) => {
    const access_token = await localStorage.getItem('TOKEN');

    config.headers['Content-Type'] = 'application/json';

    if(access_token)
        config.headers['authorization'] = `Bearer ${JSON.parse(access_token)}`

    return config;
});

export default axios;