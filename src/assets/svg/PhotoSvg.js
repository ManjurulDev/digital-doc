import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const PhotoSvg = () => (
  <Svg width={32} height={32} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect width={32} height={32} rx={16} fill='#123258' />
    <Path
      d='M23.333 20.667A1.334 1.334 0 0 1 22 22H10a1.334 1.334 0 0 1-1.333-1.333v-7.334A1.333 1.333 0 0 1 10 12h2.667L14 10h4l1.333 2H22a1.334 1.334 0 0 1 1.333 1.333v7.334Z'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M16 19.333A2.667 2.667 0 1 0 16 14a2.667 2.667 0 0 0 0 5.333Z'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default PhotoSvg;
