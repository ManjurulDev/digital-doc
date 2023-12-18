import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {components} from '../../components';
import {theme, categories} from '../../constants';

const Categories = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        user={true}
        border={true}
        title="Search"
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
        >
          {categories.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: theme.sizes.width / 3 - 22,
                  height: 112,
                  marginBottom: index >= array.length - 3 ? 0 : 14,
                  backgroundColor: '#F6F8FB',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('DoctorsList')}
              >
                <components.ImageLoader
                  source={item.icon}
                  style={{width: 40, height: 40, marginBottom: 14}}
                />
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.5,
                    color: theme.colors.darkBlue,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <components.DiagnosticsAndTests version={'v2'} />
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

export default Categories;
