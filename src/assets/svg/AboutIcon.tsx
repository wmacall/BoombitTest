import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const AboutIcon = (props: SvgProps) => {
  return (
    <Svg x="0px" y="0px" width={20} height={20} viewBox="0 0 50 50" {...props}>
      <Path d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm0 7a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm-4 10v2h2v13h-2v2h8v-2h-2V21h-6z" />
    </Svg>
  );
};
