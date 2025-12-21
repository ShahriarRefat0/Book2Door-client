import React from 'react';
import useRole from '../hook/useRole';
import { Navigate } from 'react-router';

const CustomerRoute = ({ children }) => {
  const [role, isRoleLoading ] = useRole()
  if (isRoleLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  //console.log(role)

  if (role !== "customer") {
    return (
      <Navigate to='/' replace='true'></Navigate>
    )
  }
  return children
};

export default CustomerRoute;