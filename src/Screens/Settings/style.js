import {StyleSheet} from 'react-native';

export const getStyles = theme => {
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
    },
    listItem: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    listItemText: {
      fontSize: 18,
      color: theme.textColor,
    },
    switchContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    switchLabel: {
      fontSize: 18,
      marginRight: 10,
      color: theme.textColor,
    },
    listSection: {
      width: '100%',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderBottomWidth: 2,
      borderBottomColor: theme.borderColor,
    },
    listSectionLastItem: {
      width: '100%',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    sectionText: {
      fontSize: 12,
      color: theme.textColor,
      marginLeft: 12,
      marginTop: 10,
      marginBottom: -8,
    },
  });
};
