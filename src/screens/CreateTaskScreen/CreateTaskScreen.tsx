import React from 'react';
import {DefaultScreenLayout} from '../../Layout';
import {StyledImageBackground} from './CreateTaskScreen.styled';
import {
  Box,
  Button,
  CategoryIcon,
  TextField,
  Typography,
} from '../../components';
import {TouchableOpacity} from 'react-native';
import SVGCrossIcon from '../../assets/svg/SVGCross';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';
import {useForm} from './hooks';
import {CategoryType} from '../../types/CategoryType.ts';
import SVGCalendarIcon from '../../assets/svg/SVGCalendarIcon.tsx';
import SVGClockIcon from '../../assets/svg/SVGClockIcon.tsx';

const CategoryTypeArray: CategoryType[] = ['GOAL', 'TASK', 'EVENT'];

export const CreateTaskScreen = () => {
  /**
   * Hooks
   */
  const {goBack} = useNavigation();
  const theme = useAppTheme();
  const {
    date,
    handleDateChange,
    time,
    handleTimeChange,
    name,
    setName,
    notes,
    setNotes,
    category,
    setCategory,
    handleSaveTask,
  } = useForm();

  /**
   * Values
   */
  const isDisabled = !name.length || !category;

  /**
   * Render
   */
  return (
    <DefaultScreenLayout>
      <StyledImageBackground
        source={require('../../assets/img/fullHeader.png')}>
        <Box flex={1}>
          <Box
            width="100%"
            height="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            p={16}>
            <TouchableOpacity onPress={goBack}>
              <Box
                width={48}
                height={48}
                justifyContent="center"
                alignItems="center"
                styles={{backgroundColor: theme.white, borderRadius: 48}}>
                <SVGCrossIcon />
              </Box>
            </TouchableOpacity>

            <Typography text="Add New Task" weight={600} />

            <Box
              width={48}
              height={48}
              justifyContent="center"
              alignItems="center"
              styles={{opacity: 0}}>
              <SVGCrossIcon />
            </Box>
          </Box>
          <Box p={16} gap={24}>
            <TextField
              value={name}
              onTextChange={setName}
              label="Task Title"
              placeholder="Task Title"
            />

            <Box flexDirection="row" gap={24} alignItems="center">
              <Typography
                text="Category"
                weight={600}
                textColor={theme.black}
              />
              {CategoryTypeArray.map(type => (
                <TouchableOpacity key={type} onPress={() => setCategory(type)}>
                  <Box
                    p={4}
                    styles={{
                      backgroundColor:
                        category === type ? theme.primary : theme.white,
                      borderRadius: 100,
                    }}>
                    <CategoryIcon type={type} />
                  </Box>
                </TouchableOpacity>
              ))}
            </Box>

            <Box flexDirection="row" justifyContent="space-between">
              <Box width="48%">
                <TextField
                  label="Date"
                  value={date}
                  onTextChange={handleDateChange}
                  placeholder="dd/mm/yyyy"
                  icon={<SVGCalendarIcon />}
                />
              </Box>

              <Box width="48%">
                <TextField
                  label="Time"
                  value={time}
                  onTextChange={handleTimeChange}
                  placeholder="HH:MM"
                  icon={<SVGClockIcon />}
                />
              </Box>
            </Box>

            <TextField
              multiline
              height={177}
              value={notes}
              onTextChange={setNotes}
              label="Notes"
              placeholder="Notes"
            />
          </Box>
          <Box ml={16} mr={16} mb={20}>
            <Button
              isDisabled={isDisabled}
              title="Add New Task"
              onPress={handleSaveTask}
            />
          </Box>
        </Box>
      </StyledImageBackground>
    </DefaultScreenLayout>
  );
};
