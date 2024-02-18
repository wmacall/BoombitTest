import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../../constants';

export const MasterCardIcon = (props: SvgProps) => {
  return (
    <Svg
      x="0px"
      y="0px"
      width={40}
      height={40}
      viewBox="0,0,256,256"
      {...props}>
      <Path
        d="M9.5 5.5C4.265 5.5 0 9.765 0 15s4.265 9.5 9.5 9.5c2.344 0 4.489-.86 6.148-2.275A8.946 8.946 0 0021 24a9 9 0 009-9 9 9 0 00-9-9 8.946 8.946 0 00-5.352 1.775A9.448 9.448 0 009.5 5.5zm0 2c1.774 0 3.398.614 4.68 1.637A8.957 8.957 0 0012 15c0 2.242.824 4.288 2.18 5.863A7.471 7.471 0 019.5 22.5 7.486 7.486 0 012 15c0-4.153 3.347-7.5 7.5-7.5z"
        transform="scale(8.53333)"
        fill={COLORS.WHITE}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};
