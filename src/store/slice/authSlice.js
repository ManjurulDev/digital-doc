import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


const initialState = {
    user: null,
    authToken: null,
    isPatientLoggedIn: false,
    isDoctorLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoaded: (state, action) => {
            state.isPatientLoggedIn = action.payload.patientLoggedIn;
            state.isDoctorLoggedIn = action.payload.doctorLoggedIn;
            state.authToken = action.payload.token;
            state.user = action.payload.user;
        },
        loginFailed: (state) => {
            state.isPatientLoggedIn = false;
            state.isDoctorLoggedIn = false;
        }
    },
})

export const {userLoaded, loginFailed} = authSlice.actions;

export default authSlice.reducer;