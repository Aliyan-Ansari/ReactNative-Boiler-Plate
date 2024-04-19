import {StyleSheet} from 'react-native';

export const getStyles = theme => {
  return StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: theme.backgroundColor,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: theme.text,
    },
    error: {
      color: 'red',
      marginBottom: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginBottom: 16,
    },
    icon: {
      marginRight: 10,
      color: 'gray', // Adjust icon color
    },
    input: {
      flex: 1,
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      color: theme.inputTextColor,
      backgroundColor: theme.inputBackground,
    },
    button: {
      backgroundColor: theme.buttonBackground,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
    },
    buttonText: {
      color: theme.buttonText,
      fontSize: 16,
      fontWeight: 'bold',
    },
    signupLink: {
      marginTop: 10,
    },
    signupText: {
      color: theme.signupText,
      textDecorationLine: 'underline',
    },
  });
};
