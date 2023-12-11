import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/HomePage';
import VoiceCallPage from './src/VoiceCallPage';
import Login from './src/Login';
import WelcomePage from './src/WelcomePage';
import DoctorLogin from './src/DoctorLogin';
import PatientLoginPage from './src/PatientLogin';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CallPage" component={VoiceCallPage} />
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="PatientLogin" component={PatientLoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
