import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

const BlockHeader = ({containerStyle, title, viewAll = false, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...theme.fonts.H4,
          textTransform: 'capitalize',
          color: theme.colors.darkBlue,
        }}
      >
        {title}
      </Text>
      {viewAll && (
        <TouchableOpacity onPress={onPress}>
          <svg.ViewAllSvg />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BlockHeader;
