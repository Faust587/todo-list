import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TaskDto} from '../../types/TaskDto.ts';

type InitialStateType = {
  tasks: TaskDto[];
};

const initialState: InitialStateType = {
  tasks: [],
};

export const taskSliceName = 'task';

export const taskSlice = createSlice({
  name: taskSliceName,
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskDto>) => {
      return {...state, tasks: [...state.tasks, action.payload]};
    },
    setTaskAsDone: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return {...task, isDone: true};
        }),
      };
    },
  },
});

export const {addTask, setTaskAsDone} = taskSlice.actions;
export default taskSlice.reducer;
