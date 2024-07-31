import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SVGCalendarCategory(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17 3h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"
        fill="#4A3780"
      />
    </Svg>
  );
}

export default SVGCalendarCategory;
