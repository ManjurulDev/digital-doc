import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

const FacebookSvg = (props) => (
  <Svg width={105} height={40} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path fill='#EAF0F5' d='M0 0h105v40H0z' />
    <G clipPath='url(#a)'>
      <Path
        d='M55.874 13.003 54.06 13c-2.04 0-3.358 1.352-3.358 3.445v1.589h-1.825a.285.285 0 0 0-.285.286v2.301c0 .158.127.286.285.286H50.7v5.808c0 .157.128.285.286.285h2.381a.286.286 0 0 0 .286-.285v-5.808h2.134a.285.285 0 0 0 .286-.286V18.32a.286.286 0 0 0-.285-.286h-2.135v-1.347c0-.647.154-.976.997-.976h1.223a.286.286 0 0 0 .286-.285v-2.138a.286.286 0 0 0-.285-.285Z'
        fill='#123258'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(48 13)' d='M0 0h8.75v14H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FacebookSvg;
