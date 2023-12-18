import {TouchableOpacity} from 'react-native';
import React from 'react';
import {
  favoriteDoctorExist,
  removeFavoriteDoctor,
  addFavoriteDoctor,
} from '../utils';
import {useSelector, useDispatch} from 'react-redux';

import {svg} from '../assets';
import {theme} from '../constants';

const FavoriteBtnSmall = ({doctor}) => {
  const favoriteDoctorList = useSelector((state) => state.myDoctors.list);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        if (favoriteDoctorExist(doctor, favoriteDoctorList)) {
          removeFavoriteDoctor(doctor, dispatch);
        } else {
          addFavoriteDoctor(doctor, dispatch);
        }
      }}
    >
      <svg.SmallStarSvg
        fillColor={
          favoriteDoctorExist(doctor, favoriteDoctorList)
            ? theme.colors.mainGreen
            : 'transparent'
        }
        strokeColor={
          favoriteDoctorExist(doctor, favoriteDoctorList)
            ? theme.colors.mainGreen
            : theme.colors.textColor
        }
      />
    </TouchableOpacity>
  );
};

export default FavoriteBtnSmall;
