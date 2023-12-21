import axios from 'axios'
import {useSelector} from "react-redux";

const httpClient = axios.create({
    baseURL: 'https://server.zyngchat.com/api/',
    headers: {
        Accept: 'application/json',
    },
});


const getAuthToken = () => {
    const token = useSelector((state) => state.auth.authToken);
    return 'Bearer ' + token
}

const authInterceptor = (config) => {
    const EXCEPT_ROUTES = ['doctors/login','patients/login','patients/register','options'];

    if (!EXCEPT_ROUTES.includes(config.url)) {
        config.headers['Authorization'] = getAuthToken()
    }
    return config
}

httpClient.interceptors.request.use(authInterceptor)

export default httpClient;