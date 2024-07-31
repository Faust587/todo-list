import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateTaskScreen, TaskListScreen} from '../../screens';
import {SCREENS} from './RootNavigation.constants.ts';

export type RootStackParamList = {
  TaskList: undefined;
  CreateTask: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.TASK_LIST} component={TaskListScreen} />
      <Stack.Screen name={SCREENS.CREATE_TASK} component={CreateTaskScreen} />
    </Stack.Navigator>
  );
};
