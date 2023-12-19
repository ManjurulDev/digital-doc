import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {components} from '../components';
import {useSelector} from "react-redux";
import {svg} from "../assets";

const ProfileScreen = ({navigation}) => {
    const userInfo = useSelector((state) => state.auth.user);

  const renderHeader = () => {
    return <components.Header goBack={true} title="My profile" />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 40,
        }}
      >

        <components.ImageLoader
          source={require('../assets/icons/804946.png')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.H5,
            color: theme.colors.darkBlue,
            textTransform: 'capitalize',
            marginBottom: 4,
          }}
        >
            {userInfo ? userInfo.name : null}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.textStyle14,
            color: theme.colors.textColor,
            marginBottom: 4,
          }}
        >
            {userInfo ? userInfo.email : null}
        </Text>

          <Text
              style={{
                  textAlign: 'center',
                  ...theme.fonts.textStyle14,
                  color: theme.colors.textColor,
                  marginBottom: 30,
              }}
          >
              {userInfo ? userInfo.identification : null}
          </Text>

        {/*<components.ProfileItem*/}
        {/*  title="Personal info"*/}
        {/*  onPress={() => navigation.navigate('EditMyProfile')}*/}
        {/*/>*/}
        {/*<components.ProfileItem*/}
        {/*  title="My appointment"*/}
        {/*  onPress={() => navigation.navigate('MyAppointments')}*/}
        {/*/>*/}
        {/*<components.ProfileItem*/}
        {/*  title="My doctors"*/}
        {/*  onPress={() => navigation.navigate('MyDoctors')}*/}
        {/*/>*/}
        {/*<components.ProfileItem*/}
        {/*  title="My tests & diagnostics"*/}
        {/*  onPress={() => navigation.navigate('MyTestsAndDiagnostics')}*/}
        {/*/>*/}
        <components.ProfileItem
          title="Log out"
          onPress={() => navigation.navigate('LogOut')}
        />
      </ScrollView>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
    </components.CustomSafeArea>
  );
};

export default ProfileScreen;
