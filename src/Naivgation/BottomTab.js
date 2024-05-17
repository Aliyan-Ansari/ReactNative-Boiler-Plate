/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import CustomBottomTab from '../Components/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabScreens} from '../constants/TabScreen';
import {tabs} from '../constants/Constants';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
        }}
        tabBar={props => (
          <View {...props}>
            <Tabbar
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
              onTabChange={tab => navigation.navigate(tab.name)}
            />
          </View>
        )}>
        <Tab.Group
          screenOptions={{
            headerShown: false,
          }}>
          {tabScreens.map((tab, index) => (
            <Tab.Screen
              options={{tabBarLabel: tab.name}}
              name={tab.name}
              key={`${(tab.name, index)}`}>
              {tab.component}
            </Tab.Screen>
          ))}
        </Tab.Group>
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};
export default BottomTabs;
