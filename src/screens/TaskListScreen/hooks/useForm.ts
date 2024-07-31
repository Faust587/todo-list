import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../navigation/RootNavigation/RootNavigation.constants.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux.ts';
import {useMemo} from 'react';
import {setTaskAsDone} from '../../../redux/slices/taskSlice.ts';

export const useForm = () => {
  /**
   * Hooks
   */
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();

  /**
   * Values
   */
  const list = useAppSelector(state => state.taskSlice.tasks);

  const activeList = useMemo(() => list.filter(task => !task.isDone), [list]);
  const inactiveList = useMemo(() => list.filter(task => task.isDone), [list]);

  /**
   * Handlers
   */
  const handleMoveToCreateScreen = () => {
    navigate(SCREENS.CREATE_TASK as never);
  };

  const handleSetTaskAsDone = (id: string) => {
    dispatch(setTaskAsDone(id));
  };

  /**
   * Result
   */
  return {
    activeList,
    inactiveList,
    handleMoveToCreateScreen,
    handleSetTaskAsDone,
  };
};
