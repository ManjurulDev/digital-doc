import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

const TestIsReadySvg = () => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path fill='#18DF80' d='M0 0h24v24H0z' />
    <G clipPath='url(#a)'>
      <Path
        d='M17.333 8 10 15.333 6.667 12'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(5 7)' d='M0 0h14v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TestIsReadySvg;
