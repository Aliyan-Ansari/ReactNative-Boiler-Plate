import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
// import {useDarkMode} from '../../DarkModeContext';
import {getStyles} from './CustomDrawer.style';
import CustomText from '../CustomText/CustomText';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';

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

const SUB_LIST = [
  {
    name: 'Settings',
    route: 'Settings',
    icon: 'settings-outline',
    id: 1,
  },
  {
    name: 'Log Out',
    route: 'LogOut',
    icon: 'log-out-outline',
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

const SubRouteList = ({name, route, icon, styles, theme, handleNavigate}) => (
  <TouchableOpacity
    style={styles.subRoutesEntry}
    onPress={() => handleNavigate(route)}>
    <Ionicons name={icon} color={theme.textColor} size={20} />
    <CustomText style={styles.routeTitle}>{name}</CustomText>
  </TouchableOpacity>
);

const DrawerFileButton = ({styles}) => {
  return (
    <TouchableOpacity style={styles.ctaContainer}>
      <CustomText style={styles.ctaText}>React Native Plus+</CustomText>
    </TouchableOpacity>
  );
};

const CustomDrawerHeader = () => {
  const {isDarkMode} = useDarkMode(); // Get isDarkMode state from context
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on isDarkMode
  const [styles, setStyles] = useState(getStyles(theme));
  const navigation = useNavigation();

  const handleNavigate = route => {
    console.log('Navigate Called: ', route);
    navigation.navigate(route);
  };

  useEffect(() => {
    // Update styles when isDarkMode changes
    setStyles(getStyles(theme));
  }, [isDarkMode, theme]);

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

  const renderRoutes = ({item}) => (
    <SubRouteList
      name={item.name}
      route={item.route}
      icon={item.icon}
      styles={styles}
      theme={theme}
      handleNavigate={handleNavigate}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <DrawerFileButton styles={styles} isDarkMode={true} />
        <FlatList
          data={FOLDERS_LIST_DUMMY}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.itemList}
        />
      </View>
      <FlatList
        data={SUB_LIST}
        renderItem={renderRoutes}
        keyExtractor={item => item.id}
        numColumns={1}
        contentContainerStyle={styles.routeList}
      />
    </View>
  );
};

export default CustomDrawerHeader;
