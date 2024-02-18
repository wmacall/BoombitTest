import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const HamburgerIcon = (props: SvgProps) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 18h16M4 12h16M4 6h16"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};
