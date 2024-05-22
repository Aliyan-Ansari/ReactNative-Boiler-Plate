import {StyleSheet} from 'react-native';

export const getStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      // height: '100%',
      backgroundColor: theme.backgroundColor,
    },
    headerBox: {
      backgroundColor: theme.headerBackgroundColor,
      flex: 1,
      // backgroundColor: 'red',
      width: 330, //
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputToolbar: {
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: theme.inputBackgroundColor,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.titleColor,
      textAlign: 'center',
      paddingVertical: 10,
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
      // width: 30,
      // minHeight: 32,
      // backgroundColor: theme.buttonBackgroundColor,
      //   justifyContent: 'center', // Align icon vertically center
      //   paddingHorizontal: 10, // Add padding for proper spacing
      //   marginRight: -10,
      // marginBottom: 10,
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
