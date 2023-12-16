import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const HeartBeatSvg = () => (
  <Svg width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='M29.423 10.651H22.5a.588.588 0 0 0-.536.374l-1.623 4.065-1.317-5.703a.578.578 0 0 0-1.126.009l-3.234 14.782-1.974-22.21a.577.577 0 0 0-.48-.517.57.57 0 0 0-.622.323l-4.463 10.03H.577a.577.577 0 0 0 0 1.155H7.5a.567.567 0 0 0 .527-.332l3.711-8.343 2.11 23.745a.578.578 0 0 0 .538.527l.037.002c.27 0 .505-.188.564-.454l3.49-15.954 1.153 5a.577.577 0 0 0 .518.445.585.585 0 0 0 .58-.372l2.163-5.418h6.532a.577.577 0 0 0 0-1.154Z'
        fill='#fff'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h30v30H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HeartBeatSvg;
