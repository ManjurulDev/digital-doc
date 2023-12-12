import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const doctorsData = [
  // Example data structure
  {id: '1', name: 'Dr. Jane Smith', specialty: 'Cardiology', available: true},
  {id: '2', name: 'Dr. John Doe', specialty: 'Dermatology', available: false},
  // Add more doctors as needed
];

const DoctorItem = ({name, specialty, available}) => (
  <View style={styles.doctorItem}>
    <View style={styles.doctorInfo}>
      <Text style={styles.doctorName}>{name}</Text>
      <Text style={styles.doctorSpecialty}>{specialty}</Text>
    </View>
    <Text style={styles.doctorAvailability}>
      {available ? 'Available' : 'Unavailable'}
    </Text>
  </View>
);

const DoctorDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient List</Text>
      <FlatList
        data={doctorsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DoctorItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  doctorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  doctorInfo: {
    flexDirection: 'column',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 16,
    color: 'gray',
  },
  doctorAvailability: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default DoctorDashboard;
