import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const WorkingHoursSvg = () => (
  <Svg width={14} height={14} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G
      clipPath='url(#a)'
      stroke='#18DF80'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path d='M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666Z' />
      <Path d='M7 3.5V7l2.333 1.167' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h14v14H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WorkingHoursSvg;
