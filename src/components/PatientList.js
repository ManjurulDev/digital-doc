import {View, Text, TouchableOpacity, Button, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../constants';
import {svg} from '../assets';
import BellSvg from "../assets/svg/BellSvg";
import TestIsReadySvg from "../assets/svg/TestIsReadySvg";
import Modal from "react-native-modal";


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

    const handleSubmit = () => {
        setIsModalVisible(false)
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
                fontWeight:'bold',
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
        <svg.TestIsReadySvg />

          <View>
              <Text onPress={handleModal}> <svg.DashboardSvg/> </Text>
              <Modal isVisible={isModalVisible} style={styles.container}>
                  <View style={{ flex: 1 }}>
                      <TextInput
                          style={styles.input}
                          placeholder="Title"
                      />
                      <TextInput
                          style={styles.input}
                          placeholder="Dose"
                      />
                      <TextInput
                          style={styles.input}
                          placeholder="Description"
                          multiline={true}
                          numberOfLines={4}
                      />
                      <TextInput
                          style={styles.input}
                          placeholder="Duration"
                      />
                      <Button title="Submit" onPress={handleSubmit} />
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
