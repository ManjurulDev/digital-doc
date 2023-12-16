import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LoaderSvg = () => (
  <Svg width={13} height={13} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M6.5 9.5v2M8.62 8.62l1.415 1.415M2.965 10.035 4.38 8.62M9.5 6.5h2M1.5 6.5h2M8.62 4.38l1.415-1.415M2.965 2.965 4.38 4.38M6.5 1.5v2'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default LoaderSvg;
