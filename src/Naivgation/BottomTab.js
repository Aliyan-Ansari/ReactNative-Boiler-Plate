import React, {useState, useEffect, useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabScreens} from '../constants/TabScreen';
import {tabs} from '../constants/Constants';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {useNavigationState, useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabBar = ({activeTabIndex, handleTabChange, ...props}) => (
  <View {...props}>
    <Tabbar
      {...props}
      tabs={tabs}
      transitionSpeed={150}
      tabBarContainerBackground="#5DBEA3"
      tabBarBackground="#1E1E1E"
      activeTabBackground="#5DBEA3"
      labelStyle={{
        color: '#FEFEFE',
        fontWeight: '600',
        fontSize: 11,
      }}
      containerBottomSpace={-10}
      defaultActiveTabIndex={activeTabIndex}
      onTabChange={handleTabChange}
    />
  </View>
);

const BottomTabs = ({_, route}) => {
  const navigation = useNavigation();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const navState = useNavigationState(state => state);

  useEffect(() => {
    const currentRoute = navState.routes[navState.index];
    console.log('currentRoute', currentRoute);
    const tabIndex = tabs.findIndex(tab => tab.name === currentRoute.name);
    setActiveTabIndex(tabIndex !== -1 ? tabIndex : 0);
  }, [navState]);

  const handleTabChange = tab => {
    const tabIndex = tabs.findIndex(t => t.name === tab.name);
    if (tabIndex !== -1) {
      setActiveTabIndex(tabIndex);
      navigation.navigate(tab.name);
    }
  };

  // const getTitle = () => {
  //   const currentRoute = navState.routes[navState.index];
  //   console.log('currentRoute', currentRoute.name);
  //   const tab = tabs.find(tab => tab.name === currentRoute.name);
  //   return tab ? tab.title : '';
  // };

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: getTitle(),
  //   });
  // }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
        tabBar={props => (
          <BottomTabBar
            activeTabIndex={activeTabIndex}
            handleTabChange={handleTabChange}
            {...props}
          />
        )}>
        {tabScreens.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{tabBarLabel: tab.title}}
          />
        ))}
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default BottomTabs;
