import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome To Digital Doc!</Text>
      <View style={styles.imageContainer}>
        {/* You can use an Image component to insert the doctor illustration */}
      </View>
      <Text style={styles.tagline}>Passionate About Discovery.</Text>
      <Text style={styles.tagline}>Committed To Best Service.</Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => {
            navigation.navigate('DoctorLogin');
          }}>
          Doctor
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => {
            navigation.navigate('PatientLogin');
          }}>
          Patient
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    // Add styles for the image container
  },
  tagline: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0000ff',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WelcomePage;
