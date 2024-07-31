import React, {FC, PropsWithChildren} from 'react';
import {StyledCard} from './Card.styled.ts';

export const Card: FC<PropsWithChildren> = ({children}) => {
  return <StyledCard>{children}</StyledCard>;
};
