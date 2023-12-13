import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slice/authSlice'

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers({
    auth: authReducer,
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
