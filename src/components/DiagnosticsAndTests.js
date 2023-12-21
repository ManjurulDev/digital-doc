import {View, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {svg} from '../assets';

import BlockHeader from './BlockHeader';
import DiagnosticItem from './DiagnosticItem';
import {getMeetings} from "../screens/app/api/patients.api";
import DoctorList from "./DoctorList";


const DiagnosticsAndTests = ({version}) => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        getMeetings().then(({data: {data: data}}) => {
            setMeetings(data)
        })
    }, []);

    const v1 = () => {

        return (
            <View style={{marginTop: 20, marginHorizontal: 20}}>
                <BlockHeader
                    title="Doctors"
                    containerStyle={{marginBottom: 20}}
                />
                {meetings.length > 0 && meetings.map((meeting, index) => {
                    return (
                        <DoctorList
                            boxColor="#18DF80"
                            title={meeting ? meeting.doctor.name : null}
                            description="Nephrology"
                            icon={<svg.DoctorSvg/>}
                            version={version}
                            key={index}
                            meeting={meeting}
                        />
                    )
                })}
            </View>
        );
    };

    return v1();
};

export default DiagnosticsAndTests;
