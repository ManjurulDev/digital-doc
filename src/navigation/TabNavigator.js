import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {setScreen} from '../utils';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import {theme} from '../constants';
import {svg} from '../assets';

import Home from '../screens/tabs/Home';
import Categories from '../screens/tabs/Categories';
import Notifications from '../screens/tabs/Notifications';
import Inbox from '../screens/tabs/Inbox';

import BurgerMenuModal from '../components/BurgerMenuModal';

const tabs = [
  {
    name: 'Home',
    icon: svg.DashboardSvg,
  },
  {
    name: 'Search',
    icon: svg.PeopleSvg,
  },
  {
    name: 'Notifications',
    icon: svg.BellSvg,
  },
  {
    name: 'Inbox',
    icon: svg.ChatSvg,
  },
];

const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const currentScreen = useSelector((state) => state.tab.screen);

  const renderScreens = () => {
    switch (currentScreen) {
      case 'Home':
        return <Home />;
      case 'Search':
        return (
            <View style={{marginTop:40,height:654}}>
              <Text style={{fontSize:30, textAlign:'center'}}>Coming Soon</Text>
            </View>
        );
      case 'Notifications':
        return (
            <View style={{marginTop:40,height:654}}>
              <Text style={{fontSize:30, textAlign:'center'}}>Coming Soon</Text>
            </View>
        );
      case 'Inbox':
        return (
            <View style={{marginTop:40,height:654}}>
              <Text style={{fontSize:30, textAlign:'center'}}>Coming Soon</Text>
            </View>
        );
    }
  };

  const renderBottomBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderTopColor: '#EEEEEE',
          paddingBottom: 4,
          backgroundColor: theme.colors.darkBlue,
          paddingTop: 16,
        }}
      >
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{alignItems: 'center'}}
              activeOpacity={0.8}
              onPress={() => setScreen(tab.name)}
            >
              <tab.icon
                color={
                  tab.name === currentScreen
                    ? theme.colors.mainGreen
                    : theme.colors.white
                }
                version={tab.name === 'Inbox' ? 'v1' : null}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 6,
                  color:
                    tab.name === currentScreen
                      ? theme.colors.mainGreen
                      : theme.colors.white,
                }}
              >
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderHomeIndicator = () => {
    return (
      <View
        style={{
          height: insets.bottom,
          backgroundColor: theme.colors.darkBlue,
        }}
      />
    );
  };

  const renderModal = () => {
    return <BurgerMenuModal />;
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{flex: 1, backgroundColor: theme.colors.white}}
    >
      {renderScreens()}
      {renderBottomBar()}
      {renderHomeIndicator()}
      {renderModal()}
    </SafeAreaView>
  );
};

export default TabNavigator;
