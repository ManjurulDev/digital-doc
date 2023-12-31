import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {postDoctorLogin} from "./app/api/doctor.api";
import {useDispatch} from "react-redux";
// import CheckBox from '@react-native-community/checkbox';
import {userLoaded} from "./store/slice/authSlice"

const DoctorLoginPage = ({navigation}) => {
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");
  const [errorsMessage, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleLogin = () => {
    postDoctorLogin({identification, password})
        .then(({data: {data: data}}) => {
          dispatch(userLoaded({doctorLoggedIn: true, token: data.token, user: data.user}));
          navigation.navigate('DoctorDashboard')
        }).catch((error) => {
      if (error.response.status === 422) {
        let res = error.response.data.errors;
        setErrors(res)
      } else {
        alert(error.response)
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doctor!</Text>
      <Text style={styles.signInText}>Sign in to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Identification Number"
        onChangeText={setIdentification}
        value={identification}
      />
      {!!errorsMessage && <Text style={styles.error}>{errorsMessage.identification}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {!!errorsMessage && <Text style={styles.error}>{errorsMessage.password}</Text>}
      <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Sign Up')}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signInText: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  forgotPasswordText: {
    color: 'blue',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: 'navy',
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  signUpText: {
    color: 'blue',
    marginTop: 15,
  },
});

export default DoctorLoginPage;
