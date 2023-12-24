import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../constants';
import {svg} from '../assets';
import BellSvg from "../assets/svg/BellSvg";
import TestIsReadySvg from "../assets/svg/TestIsReadySvg";

const DiagnosticItem = ({
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

    const downloadPrescription = (id) => {
        Linking.openURL(`https://server.zyngchat.com/api/meetings/${id}/download-prescription`).catch(err => console.error("Couldn't load page", err));
    };



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
                  Email : {meeting.doctor.email} {"\n"}
                  ID : {meeting.doctor.identification}
              </Text>
          </Text>
        </View>
        {/*<svg.BellSvg />*/}
        <svg.TestIsReadySvg />
          <Text onPress={() => downloadPrescription(meeting.id)}>
                <svg.DashboardSvg />
          </Text>
      </TouchableOpacity>
    );
  };
  return v1();
};

export default DiagnosticItem;
