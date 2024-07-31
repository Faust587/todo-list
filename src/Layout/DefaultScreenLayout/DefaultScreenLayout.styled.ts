import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.dirtyWhite};
`;
