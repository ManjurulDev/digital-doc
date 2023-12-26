import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const colors = {
  white: '#FFFFFF',
  textColor: '#4C6780',
  darkBlue: '#123258',
  mainGreen: '#18DF80',
  stroke: '#D3E3F1',
  transparent: 'transparent',
  mainColor: '#01579b',
};

const fonts = {
  H1: {
    fontFamily: 'Domine-Bold',
    fontSize: 32,
    lineHeight: 32 * 1.3,
  },
  H2: {
    fontFamily: 'Domine-Bold',
    fontSize: 22,
    lineHeight: 22 * 1.4,
  },
  H3: {
    fontFamily: 'Domine-Bold',
    fontSize: 20,
    lineHeight: 20 * 1.5,
  },
  H4: {
    fontFamily: 'Domine-Bold',
    fontSize: 16,
    lineHeight: 16 * 1.2,
  },
  H5: {
    fontFamily: 'Domine-Bold',
    fontSize: 14,
    lineHeight: 14 * 1.2,
  },
  H6: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  Domine_700Bold: {
    fontFamily: 'Domine-Bold',
  },
  NunitoSans_400Regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  NunitoSans_600SemiBold: {
    fontFamily: 'NunitoSans-SemiBold',
  },
  NunitoSans_700Bold: {
    fontFamily: 'NunitoSans-Bold',
  },
  textStyle14: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  textStyle16: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    lineHeight: 16 * 1.7,
  },
};

const sizes = {
  width,
  height,
};

const screens = {
  TabNavigator: 'TabNavigator',
  Onboarding: 'Onboarding',
  AddANewAddress: 'AddANewAddress',
  AddANewCard: 'AddANewCard',
  Categories: 'Categories',
  Checkout: 'Checkout',
  ConfirmationCode: 'ConfirmationCode',
  Description: 'Description',
  EditProfile: 'EditProfile',
  Filter: 'Filter',
  ForgotPassword: 'ForgotPassword',
  ForgotPasswordSentEmail: 'ForgotPasswordSentEmail',
  Home: 'Home',
  LeaveAReview: 'LeaveAReview',
  MyAddress: 'MyAddress',
  MyPromocodes: 'MyPromocodes',
  NewPassword: 'NewPassword',
  Notifications: 'Notifications',
  Order: 'Order',
  OrderFailed: 'OrderFailed',
  OrderHistory: 'OrderHistory',
  OrderHistoryOptions: 'OrderHistoryOptions',
  OrderSuccessful: 'OrderSuccessful',
  PaymentMethod: 'PaymentMethod',
  ProductLong: 'ProductLong',
  ProductShort: 'ProductShort',
  Profile: 'Profile',
  Reviews: 'Reviews',
  Shop: 'Shop',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  SignUpAccountCreated: 'SignUpAccountCreated',
  TrackYourOrder: 'TrackYourOrder',
  VerifyYourPhoneNumber: 'VerifyYourPhoneNumber',
  Wishlist: 'Wishlist',
};

const theme = {
  colors,
  fonts,
  sizes,
  screens,
};

export {theme};
