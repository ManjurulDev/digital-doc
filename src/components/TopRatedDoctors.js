import {View, ScrollView} from 'react-native';
import React from 'react';

import {dummyData} from '../constants';

import BlockHeader from './BlockHeader';
import DoctorCard from './DoctorCard';

const TopRatedDoctors = ({version}) => {
  const v1 = () => {
    return (
      <View style={{marginTop: 40}}>
        <BlockHeader
          title="Top rated Doctors"
          containerStyle={{marginBottom: 20, marginHorizontal: 20}}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
        >
          {dummyData.doctors.map((doctor, index, array) => {
            return (
              <DoctorCard
                key={index}
                version={version}
                doctor={doctor}
                array={array}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const v2 = () => {
    return (
      <View style={{marginTop: 40, marginHorizontal: 20}}>
        <BlockHeader
          title="Top rated Doctors"
          containerStyle={{marginBottom: 20}}
        />
        {dummyData.doctors.map((doctor, index, array) => {
          return (
            <DoctorCard
              key={index}
              version={version}
              doctor={doctor}
              array={array}
            />
          );
        })}
      </View>
    );
  };

  return version === 'v1' ? v1() : version === 'v2' ? v2() : null;
};

export default TopRatedDoctors;
