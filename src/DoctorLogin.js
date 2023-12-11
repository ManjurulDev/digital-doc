import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';

const DoctorLoginPage = () => {
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement the login logic
    console.log('Login credentials:', identificationNumber, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doctor!</Text>
      <Text style={styles.signInText}>Sign in to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Identification Number"
        onChangeText={setIdentificationNumber}
        value={identificationNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.rememberMeContainer}>
        {/*<CheckBox*/}
        {/*  value={rememberMe}*/}
        {/*  onValueChange={setRememberMe}*/}
        {/*  style={styles.checkbox}*/}
        {/*/>*/}
        {/*<Text style={styles.label}>Remember me</Text>*/}
        {/*<TouchableOpacity onPress={() => console.log('Forgot Password')}>*/}
        {/*  <Text style={styles.forgotPasswordText}>Forgot password?</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Sign Up')}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
