import styled from 'styled-components/native';

export const CategoryIconContainer = styled.View<{color: string}>`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
`;
