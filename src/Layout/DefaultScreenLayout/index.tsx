import React, {FC, PropsWithChildren} from 'react';
import {StyledSafeAreaView} from './DefaultScreenLayout.styled.ts';
import {StatusBar} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme.ts';

export const DefaultScreenLayout: FC<PropsWithChildren> = ({children}) => {
  const theme = useAppTheme();

  return (
    <StyledSafeAreaView>
      <StatusBar backgroundColor={theme.primary} />
      {children}
    </StyledSafeAreaView>
  );
};
