import styled from 'styled-components/native';

export const Wrapper = styled.View`
  gap: 8px;
`;

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: ${props => props.theme.white};
`;

export const StyledTextInput = styled.TextInput<{height?: number}>`
  flex: 1;
  color: ${props => props.theme.black};
  height: ${props => (props?.height ? props?.height + 'px' : 'auto')};
`;
