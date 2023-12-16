import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../../constants';

const CheckBox = ({isChecked, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={onPress}
    >
      <View
        style={{
          width: 18,
          height: 18,
          borderWidth: 1,
          borderColor: '#DBE9F5',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}
      >
        {isChecked && (
          <View
            style={{
              width: 12,
              height: 12,
              backgroundColor: theme.colors.stroke,
            }}
          />
        )}
      </View>
      <Text
        style={{
          ...theme.fonts.textStyle14,
          color: theme.colors.darkBlue,
        }}
      >
        Remember me
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
