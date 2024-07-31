import {CategoryType} from './CategoryType';

export type TaskDto = {
  id: string;
  title: string;
  notes: string;
  category: CategoryType;
  date: string;
  time: string;
  isDone: boolean;
};
