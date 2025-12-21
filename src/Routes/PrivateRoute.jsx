import React from 'react';
import useAuth from '../hook/useAuth';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()


  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  
  if (!user) {
    return (
      <Navigate to='/login'
      state={location.pathname} replace></Navigate>
    )
  }
  return children
};

export default PrivateRoute;