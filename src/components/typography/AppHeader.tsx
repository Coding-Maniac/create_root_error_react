import { Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TBaseInput } from 'types/baseTypographyTypes';

interface TAppHeader extends TBaseInput {
  // For multiple Header sizes
  fontSize?: number;
}
const AppHeader: FC<TAppHeader> = ({ text }) => {
  return <Text fontSize={50}>{text}</Text>;
};

export default AppHeader;
