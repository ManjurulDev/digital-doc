import {addToWishlist, removeFromWishlist} from '../store/slice/myDoctorsSlice';
import {showMessage} from 'react-native-flash-message';

import {store} from '../store/store';
import {setScreen as setScreenAction} from '../store/slice/tabSlice';

const setScreen = (screen) => {
  store.dispatch(setScreenAction(screen));
};

const favoriteDoctorExist = (doctor, favoriteDoctorList) => {
  return favoriteDoctorList.find((i) => i.id === doctor.id); // Возвращает true или false
};

const addFavoriteDoctor = (doctor, dispatch, message = true) => {
  dispatch(addToWishlist(doctor));
  message &&
    showMessage({
      message: 'Success',
      description: `${doctor.name} marked as favorite`,
      type: 'success',
    });
};

const removeFavoriteDoctor = (doctor, dispatch, message = true) => {
  dispatch(removeFromWishlist(doctor));
  message &&
    showMessage({
      message: 'Success',
      description: `${doctor.name} removed from favorite`,
      type: 'success',
    });
};

export {
  setScreen,
  favoriteDoctorExist,
  addFavoriteDoctor,
  removeFavoriteDoctor,
};
