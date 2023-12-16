import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../constants';

const Button = ({title, containerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.darkBlue,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: theme.colors.white,
          ...theme.fonts.NunitoSans_700Bold,
          fontSize: 14,
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
