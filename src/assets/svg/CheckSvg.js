import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckSvg = () => (
  <Svg width={18} height={10} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M12.333 1 5 8.333 1.667 5'
      stroke='#18DF80'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M16.687 1.354a.5.5 0 0 0-.707-.708l.707.708ZM9 8.334l-.353.353a.5.5 0 0 0 .707 0L9 8.333Zm-.146-.854L8.5 7.126l-.707.707.353.354.708-.707ZM15.98.646 8.647 7.98l.707.707 7.333-7.333-.707-.708ZM9.354 7.98l-.5-.5-.708.707.5.5.708-.707Z'
      fill='#18DF80'
    />
  </Svg>
);

export default CheckSvg;
