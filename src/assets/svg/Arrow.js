import React from 'react';
import {Text} from 'react-native';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Arrow = ({version}) => {
  const v1 = () => {
    return (
      <Svg width={6} height={11} fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Path d='m1 9.5 4-4-4-4' stroke='#123258' strokeLinejoin='round' />
      </Svg>
    );
  };

  const v2 = () => {
    return (
      <Svg width={10} height={7} fill='none' xmlns='http://www.w3.org/2000/svg'>
        <G clipPath='url(#a)'>
          <Path d='m9 5.5-4-4-4 4' stroke='#123258' strokeLinejoin='round' />
        </G>
        <Defs>
          <ClipPath id='a'>
            <Path
              fill='#fff'
              transform='rotate(-90 3.25 3.25)'
              d='M0 0h6v10H0z'
            />
          </ClipPath>
        </Defs>
      </Svg>
    );
  };

  const v3 = () => {
    return (
      <Svg width={10} height={7} fill='none' xmlns='http://www.w3.org/2000/svg'>
        <G clipPath='url(#a)'>
          <Path d='m1 1.5 4 4 4-4' stroke='#123258' strokeLinejoin='round' />
        </G>
        <Defs>
          <ClipPath id='a'>
            <Path
              fill='#fff'
              transform='rotate(90 4.75 5.25)'
              d='M0 0h6v10H0z'
            />
          </ClipPath>
        </Defs>
      </Svg>
    );
  };

  const debug = () => {
    // eslint-disable-next-line quotes
    return <Text style={{fontSize: 10}}>{`'v1' | 'v2' | 'v3'`}</Text>;
  };

  return (
    (version === 'v1'
      ? v1()
      : version === 'v2'
      ? v2()
      : version === 'v3'
      ? v3()
      : null) ?? <Text style={{fontSize: 10}}>{debug()}</Text>
  );
};

export default Arrow;
