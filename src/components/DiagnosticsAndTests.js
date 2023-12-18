import {View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {svg} from '../assets';

import BlockHeader from './BlockHeader';
import DiagnosticItem from './DiagnosticItem';

const DiagnosticsAndTests = ({version}) => {
  const v1 = () => {
    return (
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <BlockHeader
          title="Diagnostics & tests"
          containerStyle={{marginBottom: 20}}
        />
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
