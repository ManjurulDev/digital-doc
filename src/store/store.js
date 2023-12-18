import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slice/authSlice'
import tabReducer from './slice/tabSlice';
import modalReducer from './slice/modalSlice';
import myDoctorsSlice from "./slice/myDoctorsSlice";

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    tab: tabReducer,
    modal: modalReducer,
    myDoctors: myDoctorsSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),

    reducer: persistedReducer,
});

export const persistor = persistStore(store);
