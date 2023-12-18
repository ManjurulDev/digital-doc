import React from 'react';
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
//import redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store/store';
import StackNavigator from "./src/navigation/StackNavigator";


export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
