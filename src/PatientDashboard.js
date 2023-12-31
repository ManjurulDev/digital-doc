import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import AppDrawer from "./components/AppDrawer";

const doctorsData = [
  // Example data structure
  {id: '1', name: 'Dr. Jane Smith', specialty: 'Cardiology', available: true},
  {id: '2', name: 'Dr. John Doe', specialty: 'Dermatology', available: false},
  // Add more doctors as needed
];

const DoctorItem = ({name, specialty, available}) => {
  const navigation = useNavigation();
  return(
      <View style={styles.doctorItem}>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.doctorSpecialty}>{specialty}</Text>
        </View>

        <View>
          {available ? <Text style={styles.doctorAvailability} onPress={() => navigation.navigate('CallPage')}>Available</Text> :
              <Text style={styles.doctorAvailability}>Unavailable</Text>}
        </View>
      </View>
  )
};

const PatientDashboard = () => {
  return (
    <View style={styles.container}>
      <AppDrawer />
      <Text style={styles.header}>Doctors List</Text>
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

export default PatientDashboard;
