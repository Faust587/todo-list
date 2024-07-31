import {RootStackParamList} from './RootNavigation.tsx';

export const SCREENS: {[p: string]: keyof RootStackParamList} = {
  TASK_LIST: 'TaskList',
  CREATE_TASK: 'CreateTask',
};
