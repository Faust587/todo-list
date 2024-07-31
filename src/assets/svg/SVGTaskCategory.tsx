import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SVGTaskCategory(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
        fill="#194A66"
      />
    </Svg>
  );
}

export default SVGTaskCategory;
