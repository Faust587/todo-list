import React, {FC} from 'react';
import {StyledImageBackground} from './TaskListScreen.styled';
import {Box, Typography, Card, Button} from '../../components';
import {DefaultScreenLayout} from '../../Layout/index.ts';
import {getActualData} from './TaskListScreen.utils.ts';
import {TaskItem} from './components/index.ts';
import {ScrollView} from 'react-native';
import {useForm} from './hooks/index.ts';
import {useAppTheme} from '../../hooks/useAppTheme.ts';

export const TaskListScreen: FC = () => {
  /**
   * Hooks
   */
  const theme = useAppTheme();
  const {
    activeList,
    inactiveList,
    handleMoveToCreateScreen,
    handleSetTaskAsDone,
  } = useForm();

  /**
   * Values
   */
  const formattedDate = getActualData();

  /**
   * Render
   */
  return (
    <DefaultScreenLayout>
      <StyledImageBackground
        source={require('../../assets/img/fullHeader.png')}
      />
      <Box flex={1}>
        <Typography text={formattedDate} center fontSize={16} weight={600} />

        <Box mt={60}>
          <Typography text="My Todo List" center fontSize={30} weight={700} />
        </Box>
        <ScrollView>
          <Box width="100%" p={16} mt={40}>
            <Card>
              {activeList.map(task => (
                <TaskItem
                  key={task.id}
                  {...task}
                  textColor={theme.black}
                  setAsDone={handleSetTaskAsDone}
                />
              ))}
              {activeList.length === 0 && inactiveList.length === 0 ? (
                <Typography text="No data" textColor="#000" weight={600} />
              ) : null}
            </Card>
          </Box>

          {inactiveList.length > 0 ? (
            <Box width="100%" p={16} gap={16}>
              <Typography text="Completed" textColor="#000" weight={600} />
              <Card>
                {inactiveList.map(task => (
                  <TaskItem key={task.id} {...task} textColor={theme.black} />
                ))}
              </Card>
            </Box>
          ) : null}
        </ScrollView>
      </Box>
      <Box ml={16} mr={16} mb={20}>
        <Button title="Add New Task" onPress={handleMoveToCreateScreen} />
      </Box>
    </DefaultScreenLayout>
  );
};
