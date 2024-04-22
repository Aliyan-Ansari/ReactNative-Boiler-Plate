import React, {useState} from 'react';
import {useStripe, Elements, PaymentElement} from '@stripe/stripe-react-native';

const PaymentForm = ({onSubmit}) => {
  const [cardDetails, setCardDetails] = useState({});
  const stripe = useStripe();

  const handleSubmit = async () => {
    const {error} = await stripe.confirmCardPayment(
      // Replace with your actual PaymentIntent client secret if you're using one
      'YOUR_PAYMENT_INTENT_CLIENT_SECRET',
      {
        payment_method: {
          //   card: **elements.getElement(CardElement)**,
        },
      },
    );

    if (error) {
      console.error(error);
      // Handle payment error gracefully
    } else {
      // Retrieve customer ID from response or generate on backend
      const customerId = 'YOUR_CUSTOMER_ID'; // Replace with actual customer ID
      onSubmit(customerId); // Call your subscription creation function
    }
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
