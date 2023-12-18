import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const myDoctorsSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (inWishlist) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const {addToWishlist, removeFromWishlist} = myDoctorsSlice.actions;

export default myDoctorsSlice.reducer;
