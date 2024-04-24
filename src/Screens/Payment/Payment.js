import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  CardField,
  useStripe,
  PaymentSheetError,
  // usePaymentSheet,
} from '@stripe/stripe-react-native';

const Payment = () => {
  const route = useRoute();
  const {confirmPayment} = useStripe();
  const {clientSecret} = route.params;
  const [ready, setReady] = useState(false);
  // const [paymentStatus, setPaymentStatus] = useState('');
  // const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet();

  // const fetchPaymentSheetParams = async () => {
  //   const response = await fetch('http://localhost:4242/checkout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const {paymentIntent, ephemeralKey, customer} = await response.json();
  //   return {paymentIntent, ephemeralKey, customer};
  // };

  // const initializePaymentSheet = async () => {
  //   const {paymentIntent, ephemeralKey, customer} =
  //     await fetchPaymentSheetParams();

  //   const {error} = await initPaymentSheet({
  //     paymentIntentClientSecret: paymentIntent,
  //     customerEphemeralKeySecret: ephemeralKey,
  //     customerId: customer,
  //     merchantDisplayName: 'React Native Stripe Store',
  //     allowsDelayedPaymentMethods: true,
  //   });
  //   if (error) {
  //     console.log('Error initializing PaymentSheet', error);
  //   } else {
  //     console.log('PaymentSheet initialized');
  //     setReady(true);
  //   }
  // };

  // useEffect(() => {
  //   initializePaymentSheet();
  // }, []);

  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  console.log('clientSecret: ', clientSecret);

  useEffect(() => {
    const initializePaymentSheet = async () => {
      const {error} = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        returnURL: 'stripe-example://payment-sheet',
        merchantDisplayName: 'React Native Plus',
        // Set `allowsDelayedPaymentMethods` to true if your business handles
        // delayed notification payment methods like US bank accounts.
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

    initializePaymentSheet();
  }, [clientSecret, initPaymentSheet]);

  return (
    <View>
      <Text>Stripe Payment</Text>
      {/* <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 10,
        }}
      />
      <Button title="Pay" onPress={handlePayment} />
      <Text>{paymentStatus}</Text> */}
      <Button
        title="Subscribe"
        onPress={async () => {
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
        }}
      />
    </View>
  );
};

export default Payment;
