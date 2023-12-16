import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const VerticalMenuSvg = () => (
  <Svg width={2} height={14} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)' fill='#123258'>
      <Path d='M1 13.667A.833.833 0 1 0 1 12a.833.833 0 0 0 0 1.667ZM1 7.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM1 2A.833.833 0 1 0 1 .333.833.833 0 0 0 1 2Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h2v14H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default VerticalMenuSvg;
