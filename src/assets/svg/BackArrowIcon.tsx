import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const BackArrowIcon = (props: SvgProps) => {
  return (
    <Svg height={30} viewBox="0 0 512 512" width={30} {...props}>
      <Path d="M352 128.4L319.7 96 160 256 160 256 160 256 319.7 416 352 383.6 224.7 256z" />
    </Svg>
  );
};
