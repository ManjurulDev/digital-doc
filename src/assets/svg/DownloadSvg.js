import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DownloadSvg = () => (
  <Svg width={13} height={13} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M11 8v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8M4 5.5 6.5 8 9 5.5M6.5 8V2'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default DownloadSvg;
