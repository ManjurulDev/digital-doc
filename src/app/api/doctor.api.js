import httpClient from "./client";


const ROUTE_PREFIX = 'doctors'
const LOGIN_END_POINT = 'login'
const postDoctorLogin = (payload) => httpClient.post(ROUTE_PREFIX + '/' + LOGIN_END_POINT, payload);

export {
    postDoctorLogin
}
