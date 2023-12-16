import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {theme} from '../../constants';

const CustomSafeArea = ({children}) => {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right', 'bottom']}
      style={{flex: 1, backgroundColor: theme.colors.white}}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeArea;
