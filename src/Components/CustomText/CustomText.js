import React from 'react';
import {Text} from 'react-native';
import RubikMedium from '../../../assets/fonts/Rubik-Medium.ttf';

const CustomText = props => {
  const {children, ...rest} = props;
  return (
    <Text style={{fontFamily: 'RubikMedium'}} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
