import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 56px;
  border-radius: 50px;
  padding: 10px;
`;
