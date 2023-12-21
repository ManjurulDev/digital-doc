import httpClient from "./client";


const ROUTE_PREFIX = 'doctors'
const LOGIN_END_POINT = 'login'
const MEETING_END_POINT = 'meetings'
const postDoctorLogin = (payload) => httpClient.post(ROUTE_PREFIX + '/' + LOGIN_END_POINT, payload);
const getMeetings = () => httpClient.get(ROUTE_PREFIX + '/' + MEETING_END_POINT);

export {
    postDoctorLogin,
    getMeetings
}
