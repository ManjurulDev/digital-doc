import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../constants';

import {svg} from '../assets';

const BurgerMenuItem = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 20,
        borderBottomWidth: 1,
        height: 49,
        borderBottomColor: theme.colors.stroke,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        marginBottom: 8,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          textTransform: title === 'FAQ' ? 'uppercase' : 'capitalize',
          ...theme.fonts.textStyle14,
          color: theme.colors.darkBlue,
        }}
      >
        {title}
      </Text>
      <svg.Arrow version={'v1'} />
    </TouchableOpacity>
  );
};

export default BurgerMenuItem;
