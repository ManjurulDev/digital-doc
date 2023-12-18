import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {closeModal} from '../store/slice/modalSlice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../constants';
import {svg} from '../assets';

import ImageLoader from '../components/ImageLoader';
import BurgerMenuItem from '../components/BurgerMenuItem';

const BurgerMenuModal = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.modal.modalIsOpen);
    const userInfo = useSelector((state) => state.auth.user);

    return (
        <Modal
            isVisible={showModal}
            onBackdropPress={() => dispatch(closeModal())}
            hideModalContentWhileAnimating={true}
            backdropTransitionOutTiming={0}
            style={{margin: 0}}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
        >
            <View
                style={{
                    width: '75%',
                    height: '100%',
                    backgroundColor: theme.colors.white,
                }}
            >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingTop: insets.top + 10,
                        paddingBottom: insets.bottom,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                            paddingHorizontal: 14,
                            marginBottom: 40,
                        }}
                        onPress={() => dispatch(closeModal())}
                    >
                        <svg.CloseSvg/>
                    </TouchableOpacity>
                    <View
                        style={{
                            paddingHorizontal: 20,
                            borderBottomWidth: 1,
                            paddingBottom: 34,
                            borderBottomColor: theme.colors.stroke,
                            marginBottom: 20,
                        }}
                    >
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center'}}
                            onPress={() => {
                                dispatch(closeModal());
                                navigation.navigate('MyProfile');
                            }}
                        >
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10,
                                    backgroundColor: '#F6F8FB',
                                    borderRadius: 20,
                                }}
                            >
                                <svg.PhotoSvg/>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        ...theme.fonts.H6,
                                        color: theme.colors.darkBlue,
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {userInfo ? userInfo.name : null}
                                </Text>
                                <Text
                                    style={{
                                        ...theme.fonts.textStyle14,
                                        color: theme.colors.textColor,
                                    }}
                                >
                                    {userInfo ? userInfo.email : null}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/*<View*/}
                    {/*    style={{*/}
                    {/*        marginHorizontal: 20,*/}
                    {/*        height: 50,*/}
                    {/*        borderWidth: 1,*/}
                    {/*        borderColor: theme.colors.stroke,*/}
                    {/*        paddingHorizontal: 20,*/}
                    {/*        justifyContent: 'center',*/}
                    {/*        marginBottom: 20,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <TextInput*/}
                    {/*        placeholder="Search"*/}
                    {/*        style={{flex: 1}}*/}
                    {/*        placeholderTextColor={theme.colors.textColor}*/}
                    {/*    />*/}
                    {/*</View>*/}

                    <BurgerMenuItem
                        title={'FAQ'}
                        onPress={() => {
                            dispatch(closeModal());
                            navigation.navigate('Faq');
                        }}
                    />
                    <BurgerMenuItem
                        title={'Privacy Poliicy'}
                        onPress={() => {
                            dispatch(closeModal());
                            navigation.navigate('PrivacyPolicy');
                        }}
                    />
                    <BurgerMenuItem title={'Help & Support'} onPress={() => {
                    }}/>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default BurgerMenuModal;
