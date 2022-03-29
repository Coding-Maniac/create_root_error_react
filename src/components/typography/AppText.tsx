import { Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TBaseInput } from 'types/baseTypographyTypes';

type TAppText = TBaseInput;

const AppText: FC<TAppText> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default AppText;
