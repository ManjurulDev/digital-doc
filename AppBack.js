import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/HomePage';
import VoiceCallPage from './src/VoiceCallPage';
import Login from './src/Login';
import WelcomePage from './src/WelcomePage';
import DoctorLogin from './src/DoctorLogin';
import PatientLoginPage from './src/PatientLogin';
import PatientDashboard from './src/PatientDashboard';
import DoctorDashboard from './src/DoctorDashboard';
import PatientRegistration from './src/PatientRegistration';
import PrescriptionForm from './src/PrescriptionForm';


import {store, persistor} from './src/store/store';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Welcome">
                        <Stack.Screen name="Welcome" component={WelcomePage}/>
                        <Stack.Screen name="PatientDashboard" component={PatientDashboard}/>
                        <Stack.Screen name="DoctorDashboard" component={DoctorDashboard}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CallPage" component={VoiceCallPage} />
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="PatientLogin" component={PatientLoginPage} />
        <Stack.Screen
          name="PatientRegistration"
          component={PatientRegistration}
        />
        <Stack.Screen name={'PrescriptionForm'} component={PrescriptionForm} />
      </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
