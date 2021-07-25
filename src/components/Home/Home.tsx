import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../ReduxStore/store'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const  Home = () =>{
    const user:any = useSelector((state:RootState) => state.users['profile'])
    console.log(user?.user)
    const isLoading = useSelector((state:RootState) => state.users['loading'])
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
    
        if (error) {
          console.log('[error]', error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
        }
      };
    return (
        <div>
            <section className="container">
                <div>
                    <h1>{user?.user.email}</h1>
                    <form >
                        <CardElement />
                        <button type="submit" disabled={!stripe}>
                            Pay
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Home

