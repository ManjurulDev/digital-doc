import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {openModal} from '../../store/slice/modalSlice';
import {useDispatch} from 'react-redux';

import {svg} from '../../assets';
import {theme} from '../../constants';

const Header = ({border, burgerMenu, user, title, goBack, textStyle}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        position: 'relative',
        borderBottomWidth: 1,
        borderColor: border ? theme.colors.stroke : 'transparent',
      }}
    >
      {title && (
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.textStyle16,
            color: theme.colors.darkBlue,
            ...textStyle,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      )}
      {burgerMenu && (
        <TouchableOpacity
          style={{
            left: 0,
            height: 48,
            width: 64,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch(openModal())}
        >
          <svg.BurgerMenuSvg />
        </TouchableOpacity>
      )}
      {user && (
        <TouchableOpacity
          style={{
            right: 0,
            height: 48,
            width: 64,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            style={{height: 24, width: 24, borderRadius: 12}}
            source={{
              uri: 'https://dl.dropbox.com/s/xwtou43pizwdbmb/02.jpg?dl=0',
            }}
          />
        </TouchableOpacity>
      )}
      {goBack && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => navigation.goBack()}
          >
            <svg.GoBackSvg />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
