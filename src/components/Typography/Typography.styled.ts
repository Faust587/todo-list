import styled from 'styled-components/native';
import {TypographyProps} from './Typography.tsx';

type StyledTypographyProps = Omit<TypographyProps, 'text'>;

export const StyledTypography = styled.Text<StyledTypographyProps>`
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-weight: ${props => (props.weight ? props.weight : 400)};
  font-size: ${props => (props.fontSize ? props.fontSize : 16)}px;
  color: ${props => (props.textColor ? props.textColor : props.theme.white)};
  text-decoration-line: ${props => props.textDecorationLine};
`;
