import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SVGCrossIcon(props: SvgProps) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        d="M1 1l12.774 12.774M1 13.774L13.774 1"
        stroke="#14142B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SVGCrossIcon;
