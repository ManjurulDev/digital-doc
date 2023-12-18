import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import {components} from '../../components';
import {theme, dummyData} from '../../constants';
import {svg} from '../../assets';

const Inbox = () => {
  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        user={true}
        border={true}
        title='inbox'
        textStyle={{...theme.fonts.H2}}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        {dummyData.doctors.map((doctor, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 12,
                borderBottomWidth: 1,
                marginBottom: 12,
                borderBottomColor: theme.colors.stroke,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  backgroundColor: '#F6F8FB',
                }}
              >
                <components.ImageLoader
                  source={{uri: doctor.photo}}
                  style={{width: '100%', height: '100%', marginRight: 10}}
                  resizeMode='contain'
                />
              </View>

              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      ...theme.fonts.H5,
                      color: theme.colors.darkBlue,
                      marginBottom: 5,
                    }}
                  >
                    {doctor.name}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <svg.CheckSvg />
                    <Text
                      style={{
                        ...theme.fonts.NunitoSans_400Regular,
                        color: theme.colors.textColor,
                        fontSize: 12,
                        marginLeft: 2,
                      }}
                    >
                      12: 00
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    color: theme.colors.textColor,
                  }}
                >
                  Consat ut ea dolor aliqua laboru...
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default Inbox;
