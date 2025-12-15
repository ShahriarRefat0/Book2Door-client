import React from 'react';
import useAuth from '../hook/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <loading></loading>
  }
  
  if (!user) {
    return (
      <Navigate to='login'
      state={location.pathname} replace></Navigate>
    )
  }
  return children
};

export default PrivateRoute;