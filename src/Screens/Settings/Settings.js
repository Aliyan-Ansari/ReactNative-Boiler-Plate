import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Switch, ActivityIndicator} from 'react-native';
import {getStyles} from './style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import CustomText from '../../Components/CustomText/CustomText';
import {createStripeUser} from '../../Actions/Stripe/Stripe';

const Settings = () => {
  const navigation = useNavigation();
  const {isDarkMode, toggleMode} = useDarkMode();
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on isDarkMode
  const [styles, setStyles] = useState(getStyles(theme));
  const [loading, setLoading] = useState(false);

  const makePayload = () => {
    return {
      email: 'nativepro@gmail.com',
    };
  };

  const handleSubscribe = async () => {
    if (!loading) {
      setLoading(true);
      const payload = makePayload();
      try {
        const response = await createStripeUser({data: payload});
        setLoading(false);
        navigation.navigate('Payment', {
          clientSecret: response.data.clientSecret,
        });
      } catch (err) {
        console.log('Catch Error: ', err);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // Update styles when isDarkMode changes
    setStyles(getStyles(theme));
  }, [isDarkMode, theme]);

  return (
    <View style={styles.container}>
      {/* ---------------- Subscription Section ------------------- */}
      <View style={styles.listSection}>
        <CustomText style={styles.sectionText}>
          {'React Native plus +'}
        </CustomText>
        <TouchableOpacity style={styles.listItem} onPress={handleSubscribe}>
          <CustomText style={styles.listItemText}>{'Subscription'}</CustomText>
          {loading ? (
            <ActivityIndicator size={22} color={theme.buttonBackgroundColor} />
          ) : (
            <Ionicons name="arrow-forward" size={22} color={theme.textColor} />
          )}
        </TouchableOpacity>
      </View>

      {/* ---------------- Switch Mode Section ------------------- */}
      <View style={styles.listSection}>
        <CustomText style={styles.sectionText}>{'Appearance'}</CustomText>
        <View style={styles.switchContainer}>
          <CustomText style={styles.switchLabel}>Enable Dark Mode</CustomText>
          <Switch
            trackColor={{false: '#b2b2b2', true: '#318a8f'}}
            thumbColor={isDarkMode ? '#5DBEA3' : '#5DBEA3'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMode}
            value={isDarkMode}
          />
        </View>
      </View>

      {/* --------------- Help Section -------------------  */}
      <View style={styles.listSectionLastItem}>
        <CustomText style={styles.sectionText}>
          {'About the application'}
        </CustomText>
        <TouchableOpacity style={styles.listItem} onPress={() => {}}>
          <CustomText style={styles.listItemText}>
            {'Terms & Conditions'}
          </CustomText>
          <Ionicons name="arrow-forward" size={22} color={theme.textColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={() => {}}>
          <CustomText style={styles.listItemText}>{'Call Us'}</CustomText>
          <Ionicons name="arrow-forward" size={22} color={theme.textColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
