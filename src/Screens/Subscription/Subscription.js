import React, {useState} from 'react';
import {
  useStripe,
  Elements,
  PaymentElement,
  presentPaymentSheet,
  PaymentSheetError,
} from '@stripe/stripe-react-native';

const PaymentForm = ({onSubmit}) => {
  const [cardDetails, setCardDetails] = useState({});
  const stripe = useStripe();

  const handleSubmit = async () => {
    async () => {
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
  };

  return (
    <Elements stripe={stripe}>
      <PaymentElement
        onPaymentRequest={setCardDetails}
        onError={error => console.error(error)}
        components={{
          Card: {
            styles: {
              base: {
                // Customize card input field styles here (optional)
              },
            },
          },
        }}
      />
      <button
        disabled={!stripe || !cardDetails.complete}
        onPress={handleSubmit}>
        Subscribe
      </button>
    </Elements>
  );
};

export default PaymentForm;
