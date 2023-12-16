import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://server.zyngchat.com/api/',
    headers: {
        Accept: 'application/json',
    },
});

export default httpClient;