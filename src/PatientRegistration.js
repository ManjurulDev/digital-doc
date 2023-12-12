import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {postPatientsRegister} from "./app/api/patients.api";

const PatientRegistrationPage = ({navigation}) => {
    const [title, setTitle] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [identification, setIdentification] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [errorsMessage, setErrors] = useState({});

    const handleRegister = () => {
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
                navigation.navigate('PatientLogin')
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
                flexGrow: 1,
            }}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Text style={styles.header}>Patient Registration</Text>

                <View style={{width: '100%'}}>
                    <TextInput
                        style={styles.input}
                        placeholder="ID Card No"
                        onChangeText={setIdentification}
                        value={identification}
                    />
                    {!!errorsMessage && <Text style={styles.error}>{errorsMessage.identification}</Text>}
                </View>

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={title}
                        style={styles.picker}
                        onValueChange={(itemValue) => setTitle(itemValue)}>
                        <Picker.Item label="Mr" value="mr"/>
                        <Picker.Item label="Ms" value="ms"/>
                        <Picker.Item label="Mrs" value="mrs"/>
                        <Picker.Item label="Dr" value="dr"/>
                    </Picker>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={setName}
                        value={name}
                    />
                    {!!errorsMessage && <Text style={styles.error}>{errorsMessage.name}</Text>}
                </View>

                <View style={{width: '100%', alignItems: 'center'}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                    />
                    {!!errorsMessage && <Text style={styles.error}>{errorsMessage.email}</Text>}
                </View>


                <View style={{width: '100%', alignItems: 'center'}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone"
                        onChangeText={setPhone}
                        value={phone}
                        keyboardType="phone-pad"
                    />
                    {!!errorsMessage && <Text style={styles.error}>{errorsMessage.phone}</Text>}
                </View>


                <View style={{width: '100%', alignItems: 'center', marginBottom: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>

                <View style={{width: '100%', alignItems: 'center'}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        onChangeText={setConfirmation}
                        value={confirmation}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginBottom: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 2,
    },
    pickerContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        // For Android, you may need to adjust the height manually
    },
    picker: {
        width: '100%',
        // On Android, setting height to undefined might be necessary
        height: undefined,
    },
    registerButton: {
        width: '100%',
        borderWidth: 1,
        padding: 15,
        backgroundColor: 'navy',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15
    },
    registerButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default PatientRegistrationPage;
