import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useMemo, useCallback, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux'

import {theme} from '../../constants';
import {components} from '../../components';
import {svg} from '../../assets';
import {postDoctorLogin} from "../app/api/doctor.api";
import {userLoaded} from "../../store/slice/authSlice"


const DoctorSignIn = ({navigation}) => {
    const [filtered, setFiltered] = useState(false);
    const renderHeader = useMemo(() => {
        return <components.Header goBack={true}/>;
    }, []);
    const changeCheckbox = useCallback(() => {
        setFiltered((currentValue) => !currentValue);
    }, []); // look no dependencies!

    const dispatch = useDispatch();

    const renderContent = () => {
        const [identification, setIdentification] = useState("");
        const [password, setPassword] = useState("");
        const [errorsMessage, setErrors] = useState({});

        const handleLogin = async () => {
            postDoctorLogin({identification, password})
                .then(({data: {data: data}}) => {
                    navigation.navigate('DoctorDashboard')
                    dispatch(userLoaded({doctorLoggedIn: true, token: data.token, user: data.user}));
                }).catch((error) => {
                if (error.response.status === 422) {
                    let res = error.response.data.errors;
                    setErrors(res)
                } else {
                    alert(error.response)
                }
            });
        };


        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingTop: theme.sizes.height * 0.1,
                    paddingBottom: 20,
                    flexGrow: 1,
                }}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        ...theme.fonts.H1,
                        textAlign: 'center',
                        color: theme.colors.darkBlue,
                        marginBottom: 14,
                        textTransform: 'capitalize',
                    }}
                >
                    Doctor!
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        ...theme.fonts.textStyle16,
                        color: theme.colors.textColor,
                        marginBottom: 30,
                    }}
                >
                    Sign in to continue
                </Text>
                <components.InputField
                    placeholder="Identification Number"
                    containerStyle={{marginBottom: 10}}
                    checkIcon={true}
                    onChangeText={setIdentification}
                    value={identification}
                />
                {!!errorsMessage && <Text style={styles.error}>{errorsMessage.identification}</Text>}
                <components.InputField
                    placeholder="Password"
                    secureTextEntry={true}
                    containerStyle={{marginBottom: 20}}
                    eyeOffIcon={true}
                    onChangeText={setPassword}
                    value={password}
                />
                {!!errorsMessage && <Text style={styles.error}>{errorsMessage.password}</Text>}
                <View
                    style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}
                >
                    <components.CheckBox isChecked={filtered} onPress={changeCheckbox}/>
                    <TouchableOpacity
                        style={{marginLeft: 'auto'}}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <Text
                            style={{
                                ...theme.fonts.textStyle16,
                                color: theme.colors.darkBlue,
                            }}
                        >
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <components.Button
                    title="Sign In"
                    containerStyle={{marginBottom: 20}}
                    onPress={() => handleLogin()}
                />
                <Text
                    style={{
                        ...theme.fonts.textStyle16,
                        color: theme.colors.textColor,
                        alignSelf: 'center',
                    }}
                >
                    Dont have an account?{' '}
                    {/*<Text*/}
                    {/*    style={{color: theme.colors.darkBlue}}*/}
                    {/*    onPress={() => navigation.navigate('SignUp')}*/}
                    {/*>*/}
                    {/*    Sign Up*/}
                    {/*</Text>*/}
                </Text>
            </KeyboardAwareScrollView>
        );
    };

    const styles = StyleSheet.create({
        error: {
            color: 'red',
            marginBottom: 5,
        },
    });



    return (
        <components.CustomSafeArea>
            {renderHeader}
            {renderContent()}
        </components.CustomSafeArea>
    );
};

export default DoctorSignIn;
