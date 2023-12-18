import WelcomePage from './WelcomePage';
import DoctorSignIn from './doctor/DoctorSignIn';
import DoctorProfile from './doctor/DoctorProfile';
import TabNavigator from '../navigation/TabNavigator';
import ClientList from './doctor/ClientList';
import PatientSignIn from './patient/PatientSignIn';
import PatientSignUp from './patient/PatientSignUp';
import PatientDashboard from './patient/PatientDashboard';
import PatientProfile from './patient/PatientProfile';
import ConferenceScreen from './ConferenceScreen';
import PrescriptionScreen from './PrescriptionScreen';


const screens = {
    WelcomePage,
    DoctorSignIn,
    TabNavigator,
    ClientList,
    PatientSignUp,
    PatientSignIn,
    PatientDashboard,
    ConferenceScreen,
    PrescriptionScreen,
};

export {screens};