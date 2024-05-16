import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useStripe, PaymentSheetError} from '@stripe/stripe-react-native';
import CustomText from '../../Components/CustomText/CustomText';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import {getStyles} from './style';

const Payment = () => {
  const route = useRoute();
  const {isDarkMode} = useDarkMode(); // Get isDarkMode state from context
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on isDarkMode
  const [styles, setStyles] = useState(getStyles(theme));
  const clientSecret = route?.params?.clientSecret;
  const [ready, setReady] = useState(false);

  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const handlePay = async () => {
    const {error} = await presentPaymentSheet();
    if (error) {
      console.log('Payment Sheet error', error.code, error.message);
      if (error.code === PaymentSheetError.Failed) {
        // Handle failed
      } else if (error.code === PaymentSheetError.Canceled) {
        // Handle canceled
      }
    } else {
      // Payment succeeded
    }
  };

  useEffect(() => {
    const initializePaymentSheet = async () => {
      const {error} = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        returnURL: 'stripe-example://payment-sheet',
        merchantDisplayName: 'React Native Plus',
        allowsDelayedPaymentMethods: true,
      });
      if (error) {
        console.log('Error initializing PaymentSheet', error);
        // Handle error
      } else {
        // Handle success
        setReady(true);
        console.log('PaymentSheet initialized');
      }
    };
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret, initPaymentSheet]);

  useEffect(() => {
    // Update styles when isDarkMode changes
    setStyles(getStyles(theme));
  }, [isDarkMode, theme]);

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Subscription Payment</CustomText>
      <TouchableOpacity style={styles.button} onPress={handlePay}>
        <CustomText style={styles.buttonText}>Pay Now</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
