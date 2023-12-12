import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const PatientRegistrationPage = () => {
  const [idCardNo, setIdCardNo] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    // Implement the registration logic
    console.log(
      'Registration details:',
      idCardNo,
      name,
      password,
      title,
      email,
      phone,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="ID Card No"
        onChangeText={setIdCardNo}
        value={idCardNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={title}
          style={styles.picker}
          onValueChange={(itemValue) => setTitle(itemValue)}>
          <Picker.Item label="Mr" value="mr" />
          <Picker.Item label="Ms" value="ms" />
          <Picker.Item label="Mrs" value="mrs" />
          <Picker.Item label="Dr" value="dr" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    // For Android, you may need to adjust the height manually
  },
  picker: {
    width: '100%',
    // On Android, setting height to undefined might be necessary
    height: undefined,
  },
  registerButton: {
    width: '100%',
    borderWidth: 1,
    padding: 15,
    backgroundColor: 'navy',
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PatientRegistrationPage;
