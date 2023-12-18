import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../constants';
import {svg} from '../assets';

import ImageLoader from './ImageLoader';
import FavoriteBtnSmall from './FavoriteBtnSmall';

const DoctorCard = ({version, doctor, array, index}) => {
  const navigation = useNavigation();

  const v1 = () => {
    return (
      <View style={{marginBottom: 30}}>
        <TouchableOpacity
          style={{
            width: 130,
            height: 162,
            marginRight: array.length - 1 === index ? 20 : 14,
            backgroundColor: '#F6F8FB',
            marginBottom: 12,
          }}
          onPress={() => navigation.navigate('DoctorDetails', {doctor})}
        >
          <ImageLoader
            source={{uri: doctor.photo}}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingLeft: 4,
              paddingTop: 5,
              paddingBottom: 4,
              paddingRight: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.white,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <svg.DoctorRatingStar />
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 10,
                    color: theme.colors.textColor,
                    marginLeft: 4,
                  }}
                >
                  {doctor.rating.toFixed(1)}
                </Text>
              </View>
              <FavoriteBtnSmall doctor={doctor} />

              {/* <svg.DoctorRatingStar /> */}
            </View>
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingVertical: 2,
                paddingHorizontal: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  ...theme.fonts.NunitoSans_400Regular,
                  color: theme.colors.textColor,
                  lineHeight: 10 * 1.7,
                }}
              >
                {doctor.availableHours[0]}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              ...theme.fonts.H6,
              color: theme.colors.darkBlue,
              marginBottom: 2,
            }}
          >
            {doctor.name}
          </Text>
        </View>

        <Text
          style={{
            ...theme.fonts.NunitoSans_400Regular,
            color: theme.colors.textColor,
            fontSize: 12,
            lineHeight: 12 * 1.6,
          }}
        >
          {doctor.speciality}
        </Text>
      </View>
    );
  };

  const v2 = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: array.length - 1 === index ? 0 : 14,
          borderBottomWidth: 1,
          paddingBottom: 14,
          borderBottomColor: theme.colors.stroke,
        }}
        s
      >
        <TouchableOpacity
          style={{width: 100, height: 100, marginRight: 14}}
          onPress={() => navigation.navigate('DoctorDetails', {doctor})}
        >
          <ImageLoader
            source={{uri: doctor.photo}}
            style={{width: '100%', height: '100%', backgroundColor: '#F6F8FB'}}
            resizeMode="contain"
          />
          <View
            style={{
              backgroundColor: theme.colors.white,
              paddingHorizontal: 6,
              paddingVertical: 2,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              margin: 4,
              bottom: 0,
              left: 0,
            }}
          >
            <svg.DoctorRatingStar />
            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 10,
                color: theme.colors.textColor,
                marginLeft: 4,
              }}
            >
              {doctor.rating.toFixed(1)}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 2,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                ...theme.fonts.H6,
                color: theme.colors.darkBlue,
              }}
            >
              {doctor.name}
            </Text>
            <FavoriteBtnSmall doctor={doctor} />
          </View>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              color: theme.colors.textColor,
              fontSize: 12,
              lineHeight: 12 * 1.5,
              marginBottom: 2,
            }}
          >
            {doctor.speciality}
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 12,
              color: theme.colors.darkBlue,
              flex: 1,
            }}
          >
            ${doctor.price}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <svg.ClockSvg />
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 4,
                  color: theme.colors.textColor,
                }}
                numberOfLines={1}
              >
                {doctor.availableTime[0] +
                  ' - ' +
                  doctor.availableTime[doctor.availableTime.length - 1]}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.darkBlue,
                paddingHorizontal: 19,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  textTransform: 'capitalize',
                  fontSize: 10,
                  lineHeight: 10 * 1.7,
                }}
              >
                appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const v3 = () => {
    return (
      <View style={{width: '48%', marginBottom: 30}}>
        <TouchableOpacity
          style={{width: '100%', height: 200, marginBottom: 12}}
          onPress={() => navigation.navigate('DoctorDetails', {doctor})}
        >
          <ImageLoader
            source={{uri: doctor.photo}}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#F6F8FB',
              position: 'absolute',
            }}
            resizeMode="contain"
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingLeft: 4,
              paddingTop: 5,
              paddingBottom: 4,
              paddingRight: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.white,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <svg.DoctorRatingStar />
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 10,
                    color: theme.colors.textColor,
                    marginLeft: 4,
                  }}
                >
                  {doctor.rating.toFixed(1)}
                </Text>
              </View>
              <FavoriteBtnSmall doctor={doctor} />
            </View>
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingVertical: 2,
                paddingHorizontal: 6,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}
            >
              <svg.ClockSvg />
              <Text
                style={{
                  fontSize: 10,
                  ...theme.fonts.NunitoSans_400Regular,
                  color: theme.colors.textColor,
                  lineHeight: 10 * 1.7,
                  marginLeft: 4,
                }}
              >
                {doctor.availableHours[0]}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            ...theme.fonts.H6,
            color: theme.colors.darkBlue,
            marginBottom: 2,
          }}
        >
          {doctor.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
            }}
          >
            {doctor.speciality}
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_600SemiBold,
              fontSize: 12,
              color: theme.colors.darkBlue,
            }}
          >
            ${doctor.price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.darkBlue,
            height: 33,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: theme.colors.white,
              fontSize: 10,
              ...theme.fonts.NunitoSans_700Bold,
              textTransform: 'capitalize',
            }}
          >
            Appointment
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const v4 = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: array.length - 1 === index ? 0 : 14,
          borderBottomWidth: 1,
          paddingBottom: 14,
          borderBottomColor: theme.colors.stroke,
        }}
        s
      >
        <TouchableOpacity
          style={{
            width: 110,
            height: 110,
            marginRight: 14,
            backgroundColor: '#F6F8FB',
          }}
          onPress={() => navigation.navigate('DoctorDetails', {doctor})}
        >
          <ImageLoader
            source={{uri: doctor.photo}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
            indicatorStyle={{backgroundColor: '#F6F8FB'}}
          />
          <View
            style={{
              backgroundColor: theme.colors.white,
              paddingHorizontal: 6,
              paddingVertical: 2,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              margin: 4,
              bottom: 0,
              left: 0,
            }}
          >
            <svg.DoctorRatingStar />
            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 10,
                color: theme.colors.textColor,
                marginLeft: 4,
              }}
            >
              {doctor.rating.toFixed(1)}
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          {/* 01 */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 2,
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  ...theme.fonts.H6,
                  color: theme.colors.darkBlue,
                }}
              >
                {doctor.name}
              </Text>
              <FavoriteBtnSmall doctor={doctor} />
            </View>
            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                color: theme.colors.textColor,
                fontSize: 12,
                lineHeight: 12 * 1.5,
              }}
            >
              {doctor.speciality}
            </Text>
          </View>
          {/* 02 */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 6,
            }}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <svg.ClockSvg />
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 4,
                  color: theme.colors.textColor,
                }}
                numberOfLines={1}
              >
                {doctor.availableTime[0] +
                  ' - ' +
                  doctor.availableTime[doctor.availableTime.length - 1]}
              </Text>
            </View>
            <Text
              style={{
                ...theme.fonts.NunitoSans_600SemiBold,
                fontSize: 12,
                color: theme.colors.darkBlue,
                lineHeight: 12 * 1.5,
              }}
            >
              ${doctor.price}
            </Text>
          </View>
          {/* 03 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.mainGreen,
                width: '48%',
                height: 33,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  textTransform: 'capitalize',
                  fontSize: 10,
                  lineHeight: 10 * 1.7,
                }}
              >
                send message
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.darkBlue,
                width: '48%',
                height: 33,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('MakeAnAppointment', {doctor})}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  textTransform: 'capitalize',
                  fontSize: 10,
                  lineHeight: 10 * 1.7,
                }}
              >
                appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const v5 = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 20,
          marginBottom: array.length - 1 === index ? 0 : 20,
          borderBottomColor: theme.colors.stroke,
        }}
      >
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 7}}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#F6F8FB',
              marginRight: 10,
            }}
          >
            <ImageLoader
              source={{uri: doctor.photo}}
              style={{width: '100%', height: '100%'}}
              indicatorStyle={{backgroundColor: '#F6F8FB'}}
              resizeMode="contain"
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
                  ...theme.fonts.H6,
                  color: theme.colors.darkBlue,
                  marginBottom: 2,
                }}
              >
                {doctor.name}
              </Text>
              <Text style={{...theme.fonts.H6, color: theme.colors.darkBlue}}>
                ${doctor.price}
              </Text>
            </View>
            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
                lineHeight: 12 * 1.5,
              }}
            >
              {doctor.speciality}
            </Text>
          </View>
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
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
                lineHeight: 12 * 1.7,
                marginLeft: 6,
              }}
            >
              {doctor.date}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 8,
                backgroundColor: theme.colors.mainGreen,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  textTransform: 'capitalize',
                  ...theme.fonts.NunitoSans_700Bold,
                  fontSize: 10,
                }}
              >
                Lieve review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 8,
                backgroundColor: theme.colors.darkBlue,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <svg.DownloadSvg />
              <Text
                style={{
                  color: theme.colors.white,
                  textTransform: 'capitalize',
                  ...theme.fonts.NunitoSans_700Bold,
                  fontSize: 10,
                  marginLeft: 4,
                }}
              >
                Prescription
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return version === 'v1'
    ? v1()
    : version === 'v2'
    ? v2()
    : version === 'v3'
    ? v3()
    : version === 'v4'
    ? v4()
    : version === 'v5'
    ? v5()
    : null;
};

export default DoctorCard;
