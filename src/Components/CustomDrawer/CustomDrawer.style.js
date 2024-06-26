import {StyleSheet} from 'react-native';

export const getStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: theme.backgroundColor,
      justifyContent: 'space-between',
    },
    itemList: {
      padding: 10,
      height: 250,
    },
    folderEntry: {
      width: '100%',
      paddingHorizontal: 5,
      paddingVertical: 7,
      borderRadius: 5,
      backgroundColor: theme.backgroundColor,
    },
    chatGroup: {
      fontSize: 14,
      color: theme.grayColor,
      marginLeft: 20,
      marginBottom: -8,
    },
    ctaContainer: {
      height: 50,
      width: '85%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 3,
      marginTop: 15,
      marginBottom: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderColor: theme.borderColor,
    },
    ctaText: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 18,
      marginRight: 10,
      color: theme.textColor,
    },
    action: {
      width: 24,
      height: 24,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fileInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5,
      paddingVertical: 12,
      width: '100%',
      backgroundColor: '#303030',
      borderRadius: 8,
    },
    fileTitle: {
      fontSize: 14,
      fontWeight: '700',
      alignItems: 'flex-end',
      fontFamily: 'Rubik-Medium',
      color: theme.textColor,
      marginLeft: 5,
    },
    routeList: {
      padding: 10,
      marginTop: 10,
      borderTopWidth: 1,
      borderColor: theme.borderColor,
      justifyContent: 'flex-end',
    },
    subRoutesEntry: {
      width: '95%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 15,
      margin: 5,
      borderRadius: 5,
      backgroundColor: theme.backgroundColor,
    },
    subRoutesIcon: {
      color: theme.textColor,
    },
    routeTitle: {
      fontSize: 18,
      marginLeft: 15,
      color: theme.textColor,
    },
  });
};
