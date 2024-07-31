import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const StyledImageBackground = styled(ImageBackground)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 96px;
`;

export const IconButton = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${props => props.theme.white};
`;
