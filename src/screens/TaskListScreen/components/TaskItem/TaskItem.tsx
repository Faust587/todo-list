import React, {FC} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {TaskDto} from '../../../../types/TaskDto';
import {Box, Typography, CategoryIcon} from '../../../../components';

export const TaskItem: FC<
  TaskDto & {
    textColor: string;
    isDone: boolean;
    setAsDone?: (id: string) => any;
  }
> = ({id, category, title, textColor, isDone, setAsDone}) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      p={16}>
      <Box
        flexDirection="row"
        gap={16}
        alignItems="center"
        justifyContent="space-between">
        <CategoryIcon type={category} />
        <Box height="100%">
          <Typography
            text={title}
            weight={600}
            textColor={textColor}
            textDecorationLine={isDone ? 'line-through' : undefined}
          />
        </Box>
      </Box>
      {!isDone ? (
        <CheckBox
          value={isDone}
          onChange={() => {
            if (setAsDone) {
              setAsDone(id);
            }
          }}
        />
      ) : null}
    </Box>
  );
};
