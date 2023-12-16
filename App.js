import React from 'react';
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//import screen


import HomePage from './src/HomePage';
import VoiceCallPage from './src/VoiceCallPage';
import Login from './src/Login';
import WelcomePage from './src/screens/WelcomePage';
// import DoctorLogin from './src/DoctorLogin';
import DoctorSignIn from './src/screens/doctor/DoctorSignIn';
// import PatientLoginPage from './src/PatientLogin';
import PatientSignIn from './src/screens/patient/PatientSignIn';
import PatientSignUp from './src/screens/patient/PatientSignUp';
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
                        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomePage}/>
                        <Stack.Screen name="PatientDashboard" component={PatientDashboard}/>
                        <Stack.Screen name="DoctorDashboard" component={DoctorDashboard}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CallPage" component={VoiceCallPage} />
        <Stack.Screen options={{headerShown: false}} name="DoctorSignIn" component={DoctorSignIn} />
        <Stack.Screen options={{headerShown: false}} name="PatientSignIn" component={PatientSignIn} />
        <Stack.Screen options={{headerShown: false}} name="PatientSignUp" component={PatientSignUp} />
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
