import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

import ImageLoader from './ImageLoader';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

const MyAppointments = () => {

    const navigation = useNavigation();
    const date = new Date();
    const userInfo = useSelector((state) => state.auth.user);

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
                            <svg.CircleOneSvg/>
                        </View>
                        <View style={{position: 'absolute', right: 0, bottom: 0}}>
                            <svg.CircleTwoSvg/>
                        </View>
                        <Text
                            style={{
                                color: theme.colors.white,
                                ...theme.fonts.NunitoSans_600SemiBold,
                                lineHeight: 16 * 1.5,
                                fontSize: 12,
                            }}
                        >
                            {date.toLocaleString('default', {month: 'long'})}
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
                                {userInfo ? userInfo.name : null}
                            </Text>
                            <Text
                                style={{
                                    ...theme.fonts.NunitoSans_400Regular,
                                    fontSize: 12,
                                    lineHeight: 12 * 1.5,
                                    color: theme.colors.textColor,
                                }}
                            >
                                {userInfo ? userInfo.identification : null}
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
                                onPress={() => navigation.navigate('ConferenceScreen')}
                            >
                                Join
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
    return v1();
};

export default MyAppointments;
