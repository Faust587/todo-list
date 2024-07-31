import React, {FC} from 'react';
import {StyledTypography} from './Typography.styled';

export type TypographyProps = {
  text: string;
  center?: boolean;
  weight?: number;
  textColor?: string;
  fontSize?: number;
  textDecorationLine?: string;
};

const Typography: FC<TypographyProps> = ({text, ...props}) => (
  <StyledTypography {...props}>{text}</StyledTypography>
);

export default Typography;
