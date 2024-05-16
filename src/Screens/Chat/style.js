import {StyleSheet} from 'react-native';

export const getStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: theme.backgroundColor,
      paddingBottom: 90,
    },
    inputToolbar: {
      //   width: '100%',
      //   flex: 1,
      //   alignItems: 'center',
      //   marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: theme.inputBackgroundColor,
    },
    input: {
      width: 400,
      color: theme.inputTextColor,
    },
    button: {
      backgroundColor: theme.buttonBackgroundColor,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      borderWidth: 1,
      // borderColor: theme.buttonBorderColor,
    },
    buttonText: {
      color: theme.buttonTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
    sendButtonContainer: {
      //   backgroundColor: theme.buttonBackgroundColor,
      width: 30,
      //   justifyContent: 'center', // Align icon vertically center
      //   paddingHorizontal: 10, // Add padding for proper spacing
      //   marginRight: -10,
      marginBottom: 5,
    },
    attachmentButtonContainer: {
      width: 30,
      marginBottom: 12,
    },
    emojiButtonContainer: {
      //   justifyContent: 'center', // Align icon vertically center
      paddingHorizontal: 2, // Add padding for proper spacing
      //   alignItems: 'center',
      marginBottom: 10,
    },
  });
};
