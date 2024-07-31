import React from 'react-native';
import {CategoryIconContainer} from './CategoryIcon.styled';
import {FC} from 'react';
import {CATEGORY_COLORS, CATEGORY_ICONS} from './CategoryIcon.constants.tsx';
import {CategoryType} from '../../types/CategoryType.ts';

type CategoryIconProps = {
  type: CategoryType;
};

export const CategoryIcon: FC<CategoryIconProps> = ({type}) => {
  const color = CATEGORY_COLORS[type];
  const icon = CATEGORY_ICONS[type];
  return <CategoryIconContainer color={color}>{icon}</CategoryIconContainer>;
};
