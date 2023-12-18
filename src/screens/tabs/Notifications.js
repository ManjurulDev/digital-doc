import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import {components} from '../../components';
import {notifications, theme} from '../../constants';
import {svg} from '../../assets';

const Notifications = () => {
  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        user={true}
        border={true}
        title="Notifications"
      />
    );
  };

  const status = (name) => {
    switch (name) {
      case 'test is ready':
        return <svg.TestIsReadySvg />;
      case 'apointment is confirmed':
        return <svg.ConfirmedSvg version={'v1'} />;
      case 'apointment is rejected':
        return <svg.RejectedSvg />;
      default:
        return null;
    }
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                paddingBottom: 20,
                borderBottomColor: theme.colors.stroke,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 12,
                }}
              >
                {status(item.status)}
                <Text style={{marginLeft: 14, ...theme.fonts.H5}}>
                  {item.message}
                </Text>
              </View>
              <Text
                style={{
                  marginBottom: 14,
                  ...theme.fonts.textStyle14,
                  color: theme.colors.textColor,
                }}
              >
                {item.description}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 10,
                    color: theme.colors.textColor,
                    lineHeight: 10 * 1.5,
                  }}
                >
                  {item.date} {item.time}
                </Text>
                <TouchableOpacity>
                  {item.read && <svg.MarkAsReadSvg />}
                </TouchableOpacity>
              </View>
            </View>
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

export default Notifications;
