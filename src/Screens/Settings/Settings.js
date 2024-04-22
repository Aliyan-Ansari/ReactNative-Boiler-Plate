import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Switch} from 'react-native';
import {usePaymentSheet} from '@stripe/stripe-react-native';
import {getStyles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import CustomText from '../../Components/CustomText/CustomText';
import {checkAPI} from '../../Actions/Stripe/Stripe';

const Settings = () => {
  const {isDarkMode, toggleMode} = useDarkMode();
  const [ready, setReady] = useState(false);
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on isDarkMode
  const [styles, setStyles] = useState(getStyles(theme));
  const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet();

  const fetchPaymentSheetParams = async () => {
    const response = await fetch('http://localhost:4242/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {paymentIntent, ephemeralKey, customer} = await response.json();
    return {paymentIntent, ephemeralKey, customer};
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent, ephemeralKey, customer} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      customerEphemeralKeySecret: ephemeralKey,
      customerId: customer,
      merchantDisplayName: 'React Native Plus',
      allowsDelayedPaymentMethods: true,
    });
    if (error) {
      console.log('Error initializing PaymentSheet', error);
    } else {
      console.log('PaymentSheet initialized');
      setReady(true);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  // list items
  const listItems = [
    {
      text: 'Create A Backup',
      onPress: () => console.log('List Item 1 pressed'),
    },
    {
      text: 'Restore a Backup',
      onPress: () => console.log('List Item 1 pressed'),
    },
    {
      text: 'Delete a Backup Copy',
      onPress: () => console.log('List Item 1 pressed'),
    },
    {
      text: 'Terms & Conditions',
      onPress: () => console.log('List Item 3 pressed'),
    },
    {text: 'Call Us', onPress: () => console.log('List Item 2 pressed')},
  ];

  const makePayload = () => {
    return {
      email: 'omer@gmail.com',
    };
  };

  const handleSubscribe = async () => {
    console.log('Handle Subscribe Called');
    const payload = makePayload();
    try {
      const response = await checkAPI();
      response
        .then(abc => console.log('Abc: ', abc))
        .catch(err => console.log('Err', err));
    } catch (err) {
      console.log('Catch Error: ', err);
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
          <Ionicons name="arrow-forward" size={22} color={theme.textColor} />
        </TouchableOpacity>
      </View>

      {/* ---------------- Switch Mode Section ------------------- */}
      <View style={styles.listSection}>
        <CustomText style={styles.sectionText}>{'Appearance'}</CustomText>
        <View style={styles.switchContainer}>
          <CustomText style={styles.switchLabel}>Enable Dark Mode</CustomText>
          <Switch
            trackColor={{false: '#b2b2b2', true: '#4d4d4d'}}
            thumbColor={isDarkMode ? '#D2042D' : '#000000'}
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
