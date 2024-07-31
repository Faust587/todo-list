import React, {JSX} from 'react';
import {getTheme} from '../../styles/theme';
import {CategoryType} from '../../types/CategoryType.ts';
import SVGGoalCategory from '../../assets/svg/SVGGoalCategory.tsx';
import SVGTaskCategory from '../../assets/svg/SVGTaskCategory.tsx';
import SVGCalendarCategory from '../../assets/svg/SVGCalendarCategory.tsx';

const theme = getTheme();

export const CATEGORY_COLORS: {[K in CategoryType]: string} = {
  GOAL: theme.gold,
  TASK: theme.lightBlue,
  EVENT: theme.lightPurple,
};

export const CATEGORY_ICONS: {[K in CategoryType]: JSX.Element} = {
  GOAL: <SVGGoalCategory />,
  TASK: <SVGTaskCategory />,
  EVENT: <SVGCalendarCategory />,
};
