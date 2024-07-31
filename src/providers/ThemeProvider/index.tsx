import React, {PropsWithChildren, FC} from 'react';
import {ThemeProvider as SCThemeProvider} from 'styled-components/native';
import {getTheme} from '../../styles/theme.ts';

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const theme = getTheme();
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
