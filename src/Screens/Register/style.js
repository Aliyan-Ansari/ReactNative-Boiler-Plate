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
      color: theme.textColor,
    },
    error: {
      color: 'red',
      marginBottom: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginBottom: 12,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      color: theme.inputTextColor,
      backgroundColor: theme.inputBackgroundColor,
    },
    errorText: {
      color: 'red',
      marginBottom: 12,
    },
    button: {
      backgroundColor: theme.buttonBackgroundColor,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: theme.buttonBorderColor,
    },
    buttonText: {
      color: theme.buttonTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
    loginLink: {
      marginTop: 10,
    },
    loginText: {
      color: theme.signupLinkColor,
      textDecorationLine: 'underline',
    },
  });
};
