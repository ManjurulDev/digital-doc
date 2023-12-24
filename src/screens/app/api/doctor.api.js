import httpClient from "./client";


const ROUTE_PREFIX = 'doctors'
const LOGIN_END_POINT = 'login'
const MEETING_END_POINT = 'meetings'
const PRESCRIPTION_END_POINT = 'prescription'
const postDoctorLogin = (payload) => httpClient.post(ROUTE_PREFIX + '/' + LOGIN_END_POINT, payload);
const getMeetings = () => httpClient.get(ROUTE_PREFIX + '/' + MEETING_END_POINT);
const submitPrescription = (meetingId, payload) => httpClient.post(ROUTE_PREFIX + '/' + MEETING_END_POINT+ '/'+ meetingId+ '/' + PRESCRIPTION_END_POINT, payload);

export {
    postDoctorLogin,
    getMeetings,
    submitPrescription
}
