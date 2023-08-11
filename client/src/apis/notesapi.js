import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://03d6-31-223-50-196.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance;