import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonContainer} from './Button.styled.ts';
import {Typography} from '../Typography/index';

type ButtonProps = {
  onPress: () => any;
  title: string;
  isDisabled?: boolean;
};

export const Button: FC<ButtonProps> = ({title, onPress, isDisabled}) => {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <ButtonContainer>
        <Typography text={title} weight={700} />
      </ButtonContainer>
    </TouchableOpacity>
  );
};
