import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { getAuth } from "firebase/auth";

const stripePromise = loadStripe(
  "pk_test_51L5E0VBO0e8h2YSAy5RPUH2oXmA2WZgr4KcmvNXhIOHZIK3nrsqCl3oE5iQ430mYjB78ZeR7sM9GEtOv7LdK1tGj009hfcljvr"
);

const Payment = () => {
  const { id } = useParams();
  const [user] = useAuthState(getAuth())

  const [paymentOrder, setPaymentOrder] = useState();

  const email = user?.email;
  useEffect(() => {
    if(email){
      fetch(
        `https://hidden-ravine-16154.herokuapp.com/myOrders/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPaymentOrder(data)
        });
    }
  }, []);

  console.log(id, email);

  return (
    <div className='w-10/12 mx-auto lg:mx-0'>
      <div className='lg:w-1/2 mx-auto my-10'>
        <div className='p-10 text-left bg-base-300 rounded-lg'>
          <p>Welcome {user?.displayName}</p>
          <h3 className='text-xl py-2'>
            Order for, <br />
            <span className='font-bold text-2xl ml-5 text-black'>
              {paymentOrder?.productName}
            </span>
          </h3>
          <div className='mt-3 bg-base-100 p-5 rounded-xl'>
            <h5 className='font-bold py-1'>
              Your Phone :{" "}
              <span className='lg:text-xl'> {paymentOrder?.userPhone} </span>
            </h5>
            <h5 className='font-bold py-1'>
              Shipment Address :{" "}
              <span className='lg:text-xl'>
                {" "}
                {paymentOrder?.shipmentAddress}{" "}
              </span>
            </h5>
            <h5 className='font-bold py-1'>
              Ordered Quantity : <span className='lg:text-xl'> 6000 </span>
            </h5>
            <h5 className='font-bold p-2 bg-base-300 mt-3 rounded-2xl text-center'>
              Total Payable Amount : <br />
              <span className='lg:text-xl'>{paymentOrder?.orderPayable} $</span>
            </h5>
          </div>
        </div>
        <div className='my-5 p-5 text-left rounded-lg bg-black shadow-lg'>
          {paymentOrder ? (<Elements stripe={stripePromise}>
            <CheckoutForm paymentOrder={paymentOrder}></CheckoutForm>
          </Elements>) : ("No Payment Order")}
        </div>
      </div>
    </div>
  );
};

export default Payment;
