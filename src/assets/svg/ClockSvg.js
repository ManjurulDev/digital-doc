import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ClockSvg = () => (
  <Svg width={12} height={12} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G
      clipPath='url(#a)'
      stroke='#18DF80'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path d='M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Z' />
      <Path d='M6 3v3l2 1' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h12v12H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ClockSvg;
