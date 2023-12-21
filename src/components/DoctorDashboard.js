import {View, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {svg} from '../assets';

import BlockHeader from './BlockHeader';
import {getMeetings} from "../screens/app/api/doctor.api";
import PatientList from "./PatientList";


const DoctorDashboard = ({version}) => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        getMeetings().then(({data: {data: data}}) => {
            setMeetings(data)
        })
    }, []);

    const v1 = () => {

        return (
            <View style={{marginTop: 20, marginHorizontal: 20}}>
                <BlockHeader title="Meetings" containerStyle={{marginBottom: 20}}/>
                {meetings.map((meeting, index) => {
                    return (
                        <PatientList
                            boxColor="#34B6FF"
                            title={meeting.patient.name}
                            icon={<svg.PatientSvg/>}
                            key={index}
                            meeting={meeting}
                            version={version}
                        />
                    )
                })}
            </View>
        );
    };
    return v1();
};

export default DoctorDashboard;
