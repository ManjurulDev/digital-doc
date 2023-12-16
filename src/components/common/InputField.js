import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../../constants';
import {svg} from '../../assets';

const InputField = ({
  title,
  placeholder,
  icon,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  onChangeText,
  eyeOffIcon = false,
}) => {
  return (
    <View
      style={{
        paddingLeft: 20,
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          ...theme.fonts.DMSans_400Regular,
          fontSize: 16,
          color: theme.colors.mainColor,
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#7F9AB2'}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {checkIcon && (
        <View style={{paddingHorizontal: 20}}>{<svg.InputCheckSvg />}</View>
      )}
      {eyeOffIcon && (
        <TouchableOpacity style={{paddingHorizontal: 20}}>
          <svg.EyeOffSvg />
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
