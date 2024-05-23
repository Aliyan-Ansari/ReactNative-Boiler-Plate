import {StyleSheet} from 'react-native';

export const getStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.backgroundColor,
      marginTop: -50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.textColor,
    },
    button: {
      backgroundColor: theme.buttonBackgroundColor,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 6,
    },
    buttonText: {
      color: theme.buttonTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
};
