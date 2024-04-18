import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

const HomeScreen = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    // navigation.openDrawer(); // Open the drawer
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App</Text>
      <TouchableOpacity style={styles.button} onPress={openDrawer}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
