import {useState} from 'react';
import {CategoryType} from '../../../types/CategoryType.ts';
import {useAppDispatch} from '../../../hooks/redux.ts';
import {addTask} from '../../../redux/slices/taskSlice.ts';
import {useNavigation} from '@react-navigation/native';

export const useForm = () => {
  /**
   * Hooks
   */
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();

  /**
   * States
   */
  const [name, setName] = useState('');
  const [category, setCategory] = useState<CategoryType>();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  /**
   * Handlers
   */
  const handleDateChange = (value: string) => {
    setDate(prev => {
      if (value.length < prev.length) {
        return value;
      }

      if (prev.length === 1 || prev.length === 4) {
        return value + '/';
      }
      return value;
    });
  };

  // TODO: add validation
  const handleTimeChange = (value: string) => {
    setTime(prev => {
      if (value.length < prev.length) {
        return value;
      }

      if (prev.length === 1) {
        return value + ':';
      }
      return value;
    });
  };

  // TODO: add validation
  const handleSaveTask = () => {
    if (!name.length || !category) {
      return;
    }

    dispatch(
      addTask({
        id: Math.random() + '',
        notes,
        title: name,
        category,
        time,
        date,
        isDone: false,
      }),
    );
    goBack();
  };

  /**
   * Result
   */
  return {
    name,
    setName,
    category,
    setCategory,
    notes,
    setNotes,

    date,
    handleDateChange,

    time,
    handleTimeChange,

    handleSaveTask,
  };
};
