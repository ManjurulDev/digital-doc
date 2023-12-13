import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const doctorsData = [
  // Example data structure
  {id: '1', name: 'MR. Jane', specialty: 'Male', available: true},
  {id: '2', name: 'MRS. John Doe', specialty: 'Female', available: false},
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
