import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {svg} from '../assets';
import {theme} from '../constants';

const ProfileItem = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 61,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.stroke,
      }}
    >
      {title === 'Personal info' && <svg.UserSvg version={'v2'} />}
      {title === 'My appointment' && <svg.MedicalSvg />}
      {title === 'My doctors' && <svg.DoctorSvg />}
      {title === 'My tests & diagnostics' && <svg.BloodDropSvg />}
      {title === 'Log out' && <svg.LogOutSvg />}
      <Text
        style={{
          marginLeft: 14,
          ...theme.fonts.H6,
          color: theme.colors.darkBlue,
        }}
      >
        {title}
      </Text>
      {onPress && title !== 'Log out' && (
        <View style={{marginLeft: 'auto'}}>
          <svg.Arrow version={'v1'} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ProfileItem;
