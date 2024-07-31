import React, {FC, ReactNode} from 'react';
import {DimensionValue, FlexAlignType, View, ViewStyle} from 'react-native';

interface BoxProps {
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: FlexAlignType;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: number;
  p?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  height?: DimensionValue;
  width?: DimensionValue;
  children?: ReactNode;
  styles?: ViewStyle;
}

export const Box: FC<BoxProps> = ({
  children,
  p,
  mb,
  mt,
  pr,
  pl,
  pb,
  pt,
  mr,
  ml,
  height,
  width,
  flexDirection,
  gap,
  alignItems,
  justifyContent,
  flex,
  styles,
}) => {
  return (
    <View
      style={{
        padding: p,
        flex,
        height,
        width,
        marginLeft: ml,
        marginBottom: mb,
        marginRight: mr,
        marginTop: mt,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        flexDirection,
        gap,
        alignItems,
        justifyContent,
        ...styles,
      }}>
      {children}
    </View>
  );
};
