import {useTheme} from 'styled-components';
import {getTheme} from '../styles/theme.ts';

type Theme = ReturnType<typeof getTheme>;

export const useAppTheme = () => {
  return useTheme() as Theme;
};
