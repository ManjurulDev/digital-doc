import httpClient from './client'

const ROUTE_PREFIX = 'patients';
const REGISTER_END_POINT = 'register';
const LOGIN_END_POINT = 'login';
const OPTIONS_END_POINT = 'options';
const MEETING_END_POINT = 'meetings'

const getOptions = () => httpClient.get(OPTIONS_END_POINT);
const postPatientsRegister = (payload) => httpClient.post(ROUTE_PREFIX + '/' + REGISTER_END_POINT, payload);
const postPatientLogin = (payload) => httpClient.post(ROUTE_PREFIX + '/' + LOGIN_END_POINT, payload);

const getMeetings = () => httpClient.get(ROUTE_PREFIX + '/' + MEETING_END_POINT);

export {
    postPatientsRegister,
    postPatientLogin,
    getOptions,
    getMeetings,
}