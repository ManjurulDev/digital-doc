import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BigStarSvg = ({fillColor, strokeColor}) => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='m12 3.13 2.642 5.351a.5.5 0 0 0 .376.274l5.908.863-4.275 4.164a.5.5 0 0 0-.144.443l1.009 5.88-5.283-2.777a.5.5 0 0 0-.466 0l-5.283 2.778 1.009-5.882a.5.5 0 0 0-.144-.442L3.074 9.618l5.908-.863a.5.5 0 0 0 .376-.274L12 3.13Z'
      fill={fillColor}
      stroke={strokeColor}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default BigStarSvg;
