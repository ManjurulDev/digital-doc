import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {svg} from '../assets';

import BlockHeader from './BlockHeader';
import DiagnosticItem from './DiagnosticItem';
import {getMeetings} from "../screens/app/api/doctor.api";
import {useSelector} from "react-redux";
import httpClient from "../screens/app/api/client";
import { getOptions } from "../screens/app/api/patients.api";

const DiagnosticsAndTests = ({version}) => {
  const [meetings, setMeetings] = useState([]);
  const authToken = useSelector((state) => state.auth.authToken);


  useEffect(() => {

    // Since we have the authToken now, we can use it directly in our fetch call
    fetch('https://server.zyngchat.com/api/doctors/meetings', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authToken,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // setMeetings(json) // Uncomment and use this to set meetings if your API returns the meetings data
      })
      .catch((error) => {
        console.error(error);
      });

  }, [authToken]);

  const v1 = () => {

    return (
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <BlockHeader
          title="Diagnostics & tests"
          containerStyle={{marginBottom: 20}}
        />

          <View>
              {meetings}
          </View>
        <DiagnosticItem
          boxColor="#34B6FF"
          title="Cellular and chemical analysis"
          description="Blood analysis, amniocentesis, gastric fluid analysis, kidney function test, prenatal testing, protein-bou..."
          icon={<svg.VirusSvg />}
          version={version}
        />
        <DiagnosticItem
          boxColor="#18DF80"
          title="Diagnostic imaging"
          description="Angiocardiography, angiography, brain scanning, cholecystography, echocardiography, endoscopic ret..."
          icon={<svg.UltrasoundSvg />}
          version={version}
        />
        <DiagnosticItem
          boxColor="#F5B715"
          title="Genetic testing"
          description="Complementation test, fluorescence in situ hybridization, preimplantation genetic diagnosis"
          icon={<svg.DnaStructureSvg />}
          version={version}
        />
      </View>
    );
  };

  return v1();
};

export default DiagnosticsAndTests;
