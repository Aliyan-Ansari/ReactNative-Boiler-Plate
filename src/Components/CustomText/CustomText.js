import React from 'react';
import {Text} from 'react-native';
import RubikMedium from '../../../assets/fonts/Rubik-Medium.ttf';

const CustomText = props => {
  return <Text {...props} style={{fontFamily: RubikMedium}} />;
};

export default CustomText;
