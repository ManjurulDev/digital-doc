import {Text, ScrollView, View} from 'react-native';
import React from 'react';

import {components} from '../components';
import {svg} from '../assets';
import {theme} from '../constants';
import {persistor} from "../store/store";

const LogOut = ({navigation}) => {

    const handleLogout = () => {
        persistor.flush().then(() => {
            return persistor.purge();
        });
        navigation.navigate('WelcomePage')
    }

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <svg.KeySvg />
        <Text
          style={{
            marginTop: 20,
            ...theme.fonts.H2,
            color: theme.colors.darkBlue,
            textAlign: 'center',
            marginBottom: 14,
            textTransform: 'capitalize',
          }}
        >
          Are you sure you want{'\n'}to sign out ?
        </Text>
      </ScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <components.FooterButton
          text="Cancel"
          bgColor={theme.colors.mainGreen}
          onPress={() => navigation.goBack()}
        />
        <components.FooterButton
          text="Sure"
          bgColor={theme.colors.darkBlue}
          onPress={() => {
            // navigation.navigate('SignIn');
              handleLogout();
          }}
        />
      </View>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderContent()}
      {renderFooter()}
    </components.CustomSafeArea>
  );
};

export default LogOut;
