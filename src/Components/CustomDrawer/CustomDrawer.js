import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
// import {useDarkMode} from '../../DarkModeContext';
import {getStyles} from './CustomDrawer.style';
import CustomText from '../CustomText/CustomText';

import Ionicons from 'react-native-vector-icons/Ionicons';

const FOLDERS_LIST_DUMMY = [
  {
    name: 'Folder-1',
    size: '64mb',
    count: 10,
    id: 1,
  },
  {
    name: 'Folder-2',
    size: '6.4mb',
    count: 10,
    id: 2,
  },
];

const FolderEntry = ({name, size, count, styles, isDarkMode}) => (
  <View style={styles.folderEntry}>
    <View style={styles.icons}>
      <View style={styles.action}>
        <Ionicons
          name="ellipsis-horizontal"
          color={isDarkMode ? 'white' : 'black'}
          size={15}
        />
      </View>
      <Ionicons name="folder" size={36} style={styles.folderIcon} />
    </View>
    <View style={styles.fileInfo}>
      <CustomText style={styles.fileTitle}>{name}</CustomText>
      <View style={styles.folderDescription}>
        <CustomText style={styles.fileSize}>Items: {count} </CustomText>
        <CustomText style={styles.fileSize}>Size: {size} </CustomText>
      </View>
    </View>
  </View>
);

const DrawerFileButton = ({styles, isDarkMode}) => {
  //   const theme = isDarkMode ? darkModeTheme : appTheme;
  return (
    <TouchableOpacity style={styles.ctaContainer}>
      <CustomText style={styles.ctaText}>New File</CustomText>
      <Ionicons name="add" size={25} color="white" />
      {/* <Ionicons name="add" size={25} color={isDarkMode ? theme.colorPallete.inputWhite : theme.colorPallete.black} /> */}
    </TouchableOpacity>
  );
};

const CustomDrawerHeader = () => {
  //   const {isDarkMode} = useDarkMode();
  const styles = getStyles();

  const renderItem = ({item}) => (
    <FolderEntry
      name={item.name}
      size={item.size}
      count={item.count}
      createdAt={item.createdAt}
      styles={styles}
      isDarkMode={true}
    />
  );

  return (
    {
      name: 'Folder-1',
      size: '64mb',
      count: 10,
      id: 13,
    },
    {
      name: 'Folder-1',
      size: '64mb',
      count: 10,
      id: 14,
    },
    {
      name: 'Folder-1',
      size: '64mb',
      count: 10,
      id: 15,
    },
    {
      name: 'Folder-1',
      size: '64mb',
      count: 10,
      id: 16,
    },
    (
      <View style={styles.container}>
        <DrawerFileButton styles={styles} isDarkMode={true} />
        <FlatList
          data={FOLDERS_LIST_DUMMY}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{padding: 10}}
        />
      </View>
    )
  );
};

export default CustomDrawerHeader;
