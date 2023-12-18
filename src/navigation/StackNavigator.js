import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {screens} from '../screens';

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={screens.WelcomePage.name}>
            <Stack.Screen
                name={screens.TabNavigator.name}
                component={screens.TabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={screens.WelcomePage.name}
                component={screens.WelcomePage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name={screens.DoctorSignIn.name}
                component={screens.DoctorSignIn}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name={screens.PatientSignIn.name}
                component={screens.PatientSignIn}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name={screens.PatientSignUp.name}
                component={screens.PatientSignUp}
            />


            <Stack.Screen
                name={screens.PatientDashboard.name}
                component={screens.PatientDashboard}
            />

            <Stack.Screen
                name={screens.ConferenceScreen.name}
                component={screens.ConferenceScreen}
            />
            <Stack.Screen
                name={screens.PrescriptionScreen.name}
                component={screens.PrescriptionScreen}
            />
        </Stack.Navigator>
    )
};


export default StackNavigator;