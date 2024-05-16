import React from 'react';
import CustomBottomTab from '../Components/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabScreens} from '../constants/TabScreen';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
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
  );
};
export default BottomTabs;
