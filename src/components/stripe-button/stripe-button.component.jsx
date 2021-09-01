import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IWEP7EEhRMXfmXDNDLYs6ywga5PaKNtnhCfYxsYBnllLT7ZUyiEH2reX6DWQ99rDONmkI4CJlzo2sI7rYn0tsBM00100DQpOU'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='KK Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare/com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

            />
    )
}

export default StripeCheckoutButton