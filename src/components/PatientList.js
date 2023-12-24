import {View, Text, TouchableOpacity, Button, StyleSheet, TextInput, ScrollView} from "react-native";
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../constants';
import {svg} from '../assets';
import Modal from "react-native-modal";
import {submitPrescription} from "../screens/app/api/doctor.api";


const PatientList = ({
                         icon,
                         title,
                         description,
                         last,
                         version,
                         boxColor,
                         meeting,
                         onPress,
                     }) => {
    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(true);

    const [medicines, setMedicines] = useState([]);
    const [newMedicine, setNewMedicine] = useState({
        title: '',
        dose: '',
        dose_instruction: '',
        duration: ''
    });

    const customInputStyle = {
        input: {
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
        },
    }


    const handleAddMedicine = () => {
        setMedicines([...medicines, newMedicine]);
        setNewMedicine({title: '', dose: '', dose_instruction: '', duration: ''}); // Reset form
    };

    const handleRemoveMedicine = (index) => {
        const updatedMedicines = medicines.filter((_, i) => i !== index);
        setMedicines(updatedMedicines);
    };

    const handleSubmit = () => {
        submitPrescription(meeting.id, {medicines}).then((res) => {
            console.log(res)
            setIsModalVisible(false);
        })
    }

    const v1 = () => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.stroke,
                    paddingBottom: 20,
                    marginBottom: last ? 0 : 20,
                }}
                onPress={() =>
                    navigation.navigate('ConferenceScreen', {
                        callID: meeting.room_code,
                    })
                }
            >
                <View
                    style={{
                        width: 53,
                        height: 53,
                        backgroundColor: boxColor,
                        marginRight: 14,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {icon}
                </View>
                <View style={{flex: 1, marginRight: 12}}>
                    <Text
                        style={{
                            ...theme.fonts.H6,
                            color: theme.colors.darkBlue,
                            marginBottom: 2,
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            ...theme.fonts.NunitoSans_400Regular,
                            lineHeight: 10 * 1.5,
                            color: theme.colors.textColor,
                        }}
                        numberOfLines={2}
                    >
                        <Text>
                            Email : {meeting.patient.email} {"\n"}
                            ID : {meeting.patient.identification}
                        </Text>
                    </Text>
                </View>
                {/*<svg.BellSvg />*/}
                <svg.TestIsReadySvg/>

                <View>
                    <Text onPress={handleModal}>
                        <svg.DashboardSvg/>
                    </Text>
                    <Modal isVisible={isModalVisible} style={styles.container}>
                        <View style={{flex: 1, backgroundColor: 'white', borderRadius: 10, padding: 20}}>
                            <ScrollView>
                                {medicines.map((medicine, index) => (
                                    <View key={index} style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: 10
                                    }}>
                                        <Text>{medicine.title} - {medicine.dose}</Text>
                                        <Button title="Remove" onPress={() => handleRemoveMedicine(index)}/>
                                    </View>
                                ))}
                            </ScrollView>

                            <TextInput style={customInputStyle.input} placeholder="Title" value={newMedicine.title}
                                       onChangeText={(text) => setNewMedicine({...newMedicine, title: text})}/>
                            <TextInput style={customInputStyle.input} placeholder="Dose" value={newMedicine.dose}
                                       onChangeText={(text) => setNewMedicine({...newMedicine, dose: text})}/>
                            <TextInput style={customInputStyle.input} placeholder="Instruction"
                                       value={newMedicine.dose_instruction} onChangeText={(text) => setNewMedicine({
                                ...newMedicine,
                                dose_instruction: text
                            })}/>
                            <TextInput style={customInputStyle.input} placeholder="Duration" keyboardType="numeric"
                                       value={newMedicine.duration.toString()}
                                       onChangeText={(text) => setNewMedicine({...newMedicine, duration: text})}/>

                            <Button title="Add Medicine" onPress={handleAddMedicine}/>
                            <Button title="Submit" onPress={handleSubmit}/>
                        </View>
                    </Modal>
                </View>
            </TouchableOpacity>
        );
    };
    return v1();
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        height: 40,
    },
    input: {
        marginTop: 8,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        lineHeight: 20,
        padding: 8,
        backgroundColor: 'rgba(151, 151, 151, 0.25)',
    },
})

export default PatientList;
