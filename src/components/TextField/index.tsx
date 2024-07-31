import React, {FC, JSX} from 'react';
import {Container, StyledTextInput, Wrapper} from './TextField.styled.ts';
import {Typography} from '../Typography';
import {useAppTheme} from '../../hooks/useAppTheme.ts';

type TextFieldProps = {
  multiline?: boolean;
  label: string;
  value: string;
  onTextChange: (value: string) => any;
  placeholder?: string;
  icon?: JSX.Element;
  height?: number;
};

export const TextField: FC<TextFieldProps> = ({
  label,
  onTextChange,
  value,
  icon,
  placeholder,
  multiline,
  height,
}) => {
  const theme = useAppTheme();

  return (
    <Wrapper>
      <Typography text={label} weight={600} textColor={theme.black} />
      <Container>
        <StyledTextInput
          multiline={multiline}
          value={value}
          onChangeText={onTextChange}
          placeholder={placeholder}
          height={height}
        />
        {icon}
      </Container>
    </Wrapper>
  );
};
