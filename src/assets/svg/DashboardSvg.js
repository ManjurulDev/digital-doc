import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

const DashboardSvg = ({color = '#fff'}) => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect x={3.6} y={15.6} width={7.2} height={4.8} rx={1} stroke={color} />
    <Rect x={13.2} y={12} width={6} height={8.4} rx={1} stroke={color} />
    <Rect x={13.2} y={4.8} width={6} height={4.8} rx={1} stroke={color} />
    <Rect x={3.6} y={4.8} width={7.2} height={8.4} rx={1} stroke={color} />
  </Svg>
);

export default DashboardSvg;
