import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../../hook/useAxios';

const PaymentSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  // console.log(sessionId)
const axios = useAxios()
  useEffect(() => {
    if (sessionId) {
      axios.post(`/payment-success`, {sessionId})
    }
  },[sessionId])
  return (
    <div>
      <h1>PaymentSuccess</h1>
    </div>
  );
};

export default PaymentSuccess;