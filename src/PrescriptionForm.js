import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const PrescriptionForm = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const handleSubmit = () => {
    // Implement submission logic
    console.log('Prescription Details:', {
      patientName,
      doctorName,
      medication,
      dosage,
      frequency,
      duration,
      additionalNotes,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Prescription Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Patient Name"
        onChangeText={setPatientName}
        value={patientName}
      />
      <TextInput
        style={styles.input}
        placeholder="Doctor Name"
        onChangeText={setDoctorName}
        value={doctorName}
      />
      <TextInput
        style={styles.input}
        placeholder="Medication"
        onChangeText={setMedication}
        value={medication}
      />
      <TextInput
        style={styles.input}
        placeholder="Dosage"
        onChangeText={setDosage}
        value={dosage}
      />
      <TextInput
        style={styles.input}
        placeholder="Frequency (e.g., 3 times a day)"
        onChangeText={setFrequency}
        value={frequency}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (e.g., 7 days)"
        onChangeText={setDuration}
        value={duration}
      />
      <TextInput
        style={styles.input}
        placeholder="Additional Notes"
        onChangeText={setAdditionalNotes}
        value={additionalNotes}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Prescription</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  submitButton: {
    width: '100%',
    padding: 15,
    backgroundColor: 'navy',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PrescriptionForm;
