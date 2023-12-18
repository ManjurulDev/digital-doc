import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker';

import {theme} from '../../constants';
import {components} from '../../components';
import {postPatientsRegister, getOptions} from "../app/api/patients.api";

const PatientSignUp = ({navigation}) => {
    const renderHeader = () => {
        return <components.Header goBack={true}/>;
    };

    const renderContent = () => {

        const [titleOptions, setTitleOptions] = useState([]);
        const [title, setTitle] = useState();
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [identification, setIdentification] = useState("");
        const [password, setPassword] = useState("");
        const [confirmation, setConfirmation] = useState("");
        const [errorsMessage, setErrors] = useState({});

        useEffect(() => {
            getOptions().then(({data: {data: data}}) => {
                setTitleOptions(data.titles)
            })
        }, []);


        const handleSubmit = () => {
            let fromModel = {
                title: title,
                name: name,
                email: email,
                phone: phone,
                identification: identification,
                password: password,
                password_confirmation: confirmation,
            };

            postPatientsRegister(fromModel)
                .then(({data: {message}}) => {
                    navigation.navigate('PatientSignIn')
                }).catch((error) => {
                if (error.response.status === 422) {
                    let res = error.response.data.errors;
                    setErrors(res)
                } else {
                    alert(error.response)
                }
            });
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
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
                        marginBottom: 30,
                        textTransform: 'capitalize',
                    }}
                >
                    Sign up
                </Text>

                <Picker
                    className="css-textinput-11aywtz"
                    style={{
                        paddingLeft: 20,
                        height: 50,
                        width: '100%',
                        borderWidth: 1,
                        borderColor: theme.colors.stroke,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 20
                    }}
                    selectedValue={title}
                    onValueChange={(itemValue, itemIndex) =>
                        setTitle(itemValue)
                    }>
                    <Picker.Item label="Select Title" value=""/>
                    {titleOptions.length > 0 && titleOptions.map((item) => {
                        return <Picker.Item label={item} value={item} key={item}/>
                    })}
                </Picker>

                <components.InputField
                    placeholder="Name"
                    checkIcon={true}
                    onChangeText={setName}
                    value={name}
                    containerStyle={{marginBottom: 10}}
                />
                {!!errorsMessage && <Text style={styles.error}>{errorsMessage.name}</Text>}

                <components.InputField
                    placeholder="Email"
                    testID="LoginEmailAddress"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    checkIcon={true}
                    onChangeText={setEmail}
                    value={email}
                    containerStyle={{marginBottom: 20}}
                />
                {!!errorsMessage && <Text style={styles.error}>{errorsMessage.email}</Text>}
                <components.InputField
                    placeholder="Phone"
                    checkIcon={true}
                    onChangeText={setPhone}
                    value={phone}
                    containerStyle={{marginBottom: 20}}
                />
                {!!errorsMessage && <Text style={styles.error}>{errorsMessage.phone}</Text>}
                <components.InputField
                    placeholder="Identification"
                    checkIcon={true}
                    onChangeText={setIdentification}
                    value={identification}
                    containerStyle={{marginBottom: 10}}
                />
                {!!errorsMessage && <Text style={styles.error}>
                    {errorsMessage.identification}
                </Text>}
                <components.InputField
                    placeholder="password"
                    secureTextEntry={true}
                    eyeOffIcon={true}
                    onChangeText={setPassword}
                    value={password}
                    containerStyle={{marginBottom: 10}}
                />
                {!!errorsMessage && <Text style={styles.error}>{errorsMessage.password}</Text>}
                <components.InputField
                    placeholder="confirm password"
                    secureTextEntry={true}
                    eyeOffIcon={true}
                    onChangeText={setConfirmation}
                    value={confirmation}
                    containerStyle={{marginBottom: 20}}
                />
                <components.Button
                    title="sign up"
                    containerStyle={{marginBottom: 20}}
                    onPress={() => handleSubmit()}
                />

                <Text
                    style={{
                        ...theme.fonts.textStyle16,
                        color: theme.colors.textColor,
                        alignSelf: 'center',
                    }}
                >
                    Already have an account?{' '}
                    <Text
                        style={{color: theme.colors.darkBlue}}
                        onPress={() => navigation.navigate('PatientSignIn')}
                    >
                        Sign In
                    </Text>
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
            {renderHeader()}
            {renderContent()}
        </components.CustomSafeArea>
    );
};

export default PatientSignUp;
