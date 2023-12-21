import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

import ImageLoader from './ImageLoader';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

const DoctorConference = ({version}) => {
    const user = useSelector((state) => state.auth.user);
    const date = new Date();
  const v1 = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.stroke,
          paddingBottom: 21,
        }}
      >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              width: '48%',
              height: 160,
              backgroundColor: theme.colors.darkBlue,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{position: 'absolute', right: 0, top: 0}}>
              <svg.CircleOneSvg />
            </View>
            <View style={{position: 'absolute', right: 0, bottom: 0}}>
              <svg.CircleTwoSvg />
            </View>
            <Text
              style={{
                color: theme.colors.white,
                ...theme.fonts.NunitoSans_600SemiBold,
                lineHeight: 16 * 1.5,
                fontSize: 12,
              }}
            >
                {date.toLocaleString('default', { month: 'long' })}
            </Text>
            <Text
              style={{
                ...theme.fonts.Domine_700Bold,
                fontSize: 40,
                color: theme.colors.white,
                lineHeight: 40 * 1.3,
                marginVertical: 16,
              }}
            >
                {date.getDate()}
            </Text>
            <Text
              style={{
                ...theme.fonts.NunitoSans_600SemiBold,
                color: theme.colors.white,
                lineHeight: 16 * 1.5,
                fontSize: 12,
              }}
            >
              at 4:30pm
            </Text>
          </View>
          <View
            style={{
              width: '48%',
              height: 160,
            }}
          >

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Text style={{...theme.fonts.H6, color: theme.colors.darkBlue}}>
                  {user ? user.title : null} {user ? user.name : null}
              </Text>
                <Text style={{...theme.fonts.H6, color: theme.colors.darkBlue}}>
                   ID : {user ? user.identification : null}
                </Text>
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 12,
                  lineHeight: 12 * 1.5,
                  color: theme.colors.textColor,
                }}
              >
                  {user ? user.email : null}
              </Text>
            </View>


            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 33,
                backgroundColor: theme.colors.mainGreen,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.NunitoSans_700Bold,
                  color: theme.colors.white,
                  fontSize: 10,
                  textTransform: 'capitalize',
                }}
              >
                  {user ? user.speciality.name : null}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const v2 = () => {
    return (
      <View style={{paddingHorizontal: 20, marginTop: 40}}>
        <Text
          style={{
            marginBottom: 20,
            ...theme.fonts.H4,
            textTransform: 'capitalize',
            color: theme.colors.darkBlue,
          }}
        >
          My appointments
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: theme.colors.darkBlue,
              marginRight: 14,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{color: theme.colors.white, ...theme.fonts.H3}}>
              21
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                ...theme.fonts.NunitoSans_600SemiBold,
                fontSize: 10,
                textTransform: 'capitalize',
              }}
            >
              January
            </Text>
          </View>
          <ImageLoader
            source={{
              uri: 'https://dl.dropbox.com/s/pd0x5kgwupd08y3/02.jpg?dl=0',
            }}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'flex-start',
              marginRight: 10,
            }}
          />
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}
            >
              <View>
                <Text
                  style={{
                    ...theme.fonts.H6,
                    color: theme.colors.darkBlue,
                    marginBottom: 2,
                  }}
                >
                  Dr. Georgia Griffin
                </Text>
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 12,
                    color: theme.colors.textColor,
                    lineHeight: 12 * 1.5,
                  }}
                >
                  Сardiologist
                </Text>
              </View>
              <TouchableOpacity style={{width: 40, alignItems: 'flex-end'}}>
                <svg.VerticalMenuSvg />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <svg.ClockSvg />
                <Text
                  style={{
                    marginLeft: 4,
                    ...theme.fonts.NunitoSans_700Bold,
                    fontSize: 12,
                    lineHeight: 12 * 1.7,
                    color: theme.colors.mainGreen,
                  }}
                >
                  at 5:15 pm
                </Text>
              </View>
              <Text
                style={{
                  ...theme.fonts.NunitoSans_600SemiBold,
                  fontSize: 12,
                  color: theme.colors.darkBlue,
                  lineHeight: 12 * 1.7,
                }}
              >
                $24
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return version === 'v1' ? v1() : version === 'v2' ? v2() : null;
};

export default DoctorConference;
