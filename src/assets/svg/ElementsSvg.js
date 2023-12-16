import * as React from 'react';
import Svg, {Ellipse, Circle} from 'react-native-svg';

const ElementsSvg = ({version}) => {
  const v1 = () => {
    return (
      <Svg
        width={47}
        height={37}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Ellipse
          opacity={0.05}
          cx={39.5}
          cy={39}
          rx={39.5}
          ry={39}
          fill='#fff'
        />
      </Svg>
    );
  };

  const v2 = () => {
    return (
      <Svg
        width={34}
        height={41}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Ellipse
          opacity={0.05}
          cx={39.5}
          cy={2}
          rx={39.5}
          ry={39}
          fill='#fff'
        />
      </Svg>
    );
  };

  const v3 = () => {
    return (
      <Svg
        width={75}
        height={75}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Circle opacity={0.05} cx={80.5} cy={-5.5} r={80.5} fill='#fff' />
      </Svg>
    );
  };

  const v4 = () => {
    return (
      <Svg
        width={100}
        height={43}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Circle opacity={0.05} cx={78.5} cy={80.5} r={80.5} fill='#fff' />
      </Svg>
    );
  };

  return version === 'v1'
    ? v1()
    : version === 'v2'
    ? v2()
    : version === 'v3'
    ? v3()
    : version === 'v4'
    ? v4()
    : null;
};

export default ElementsSvg;
