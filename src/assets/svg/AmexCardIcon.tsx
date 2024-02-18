import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../../constants';

export const AmexCardIcon = (props: SvgProps) => {
  return (
    <Svg
      x="0px"
      y="0px"
      width={40}
      height={40}
      viewBox="0,0,256,256"
      {...props}>
      <Path
        d="M5 7c-2.75 0-5 2.25-5 5v26c0 2.75 2.25 5 5 5h40c2.75 0 5-2.25 5-5V12c0-2.75-2.25-5-5-5zm0 2h40c1.668 0 3 1.332 3 3v26c0 1.668-1.332 3-3 3H5c-1.668 0-3-1.332-3-3V12c0-1.668 1.332-3 3-3zm3.563 10.906l-3.72 8.5h2.22l.812-1.906h4.188l.812 1.906h4.219v-6.312l2.812 6.312h1.907l2.843-6.218v6.218h2.094v-8.5h-3.344l-2.562 5.719-2.563-5.719H15v8.188l-3.656-8.188zm20.937 0v8.532h8l2.5-2.844 2.469 2.843h2.656l-3.75-4.375 3.75-4.156h-2.656l-2.407 2.657-2.312-2.657zM9.906 21.688l1.313 3H8.656zm21.657.03l5.093.032 2.032 2.313-2.282 2.562h-4.843v-1.688h4.625v-1.625h-4.626z"
        transform="scale(5.12)"
        fill={COLORS.WHITE}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};
