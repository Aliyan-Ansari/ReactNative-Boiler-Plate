import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {getStyles} from './CustomDrawer.style';
import CustomText from '../CustomText/CustomText';
import {excerpt} from '../../utils/HelperFunctions';

const FOLDERS_LIST_DUMMY = [
  {
    name: 'Two way data binding overview',
    id: 1,
  },
  {
    name: 'Flex Auth module setup',
    id: 2,
  },
  {
    name: 'Data binding in Angular',
    id: 3,
  },
];

const FOLDERS_SUB_LIST_DUMMY = [
  {
    name: 'Time Mastery Strategies',
    id: 3,
  },
  {
    name: 'Save Blob in Sqlite',
    id: 4,
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
    <View style={styles.fileInfo}>
      <TouchableOpacity>
        <CustomText style={styles.fileTitle}>{excerpt(name, 24)}</CustomText>
      </TouchableOpacity>
      <View style={styles.action}>
        <TouchableOpacity>
          <Ionicons
            name="ellipsis-horizontal"
            color={isDarkMode ? 'white' : 'black'}
            size={15}
          />
        </TouchableOpacity>
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
  const {isDarkMode} = useDarkMode();
  const theme = isDarkMode ? darkMode : lightMode;
  const [styles, setStyles] = useState(getStyles(theme));
  const navigation = useNavigation();

  const handleNavigate = route => {
    console.log('Navigate Called: ', route);
    navigation.navigate(route);
  };

  useEffect(() => {
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
        <CustomText style={styles.chatGroup}>{excerpt('Today', 24)}</CustomText>
        <FlatList
          data={FOLDERS_LIST_DUMMY}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
          contentContainerStyle={styles.itemList}
        />
        <CustomText style={styles.chatGroup}>
          {excerpt('Yesterday', 24)}
        </CustomText>
        <FlatList
          data={FOLDERS_SUB_LIST_DUMMY}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
          contentContainerStyle={styles.itemList}
        />
      </View>
      <View style={styles.section}>
        <FlatList
          data={SUB_LIST}
          renderItem={renderRoutes}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.routeList}
        />
      </View>
    </View>
  );
};

export default CustomDrawerHeader;
