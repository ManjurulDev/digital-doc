import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const FooterButton = ({text, bgColor, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: theme.colors.white,
          ...theme.fonts.NunitoSans_700Bold,
          fontSize: 14,
          lineHeight: 14 * 1.7,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FooterButton;
