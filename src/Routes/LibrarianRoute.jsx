import React from 'react';
import useRole from '../hook/useRole';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import { Navigate } from 'react-router';

const LibrarianRoute = ({ children}) => {
  const [ role, isRoleLoading ] = useRole()
  if (isRoleLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (role !== "librarian") {
    return (
      <Navigate to='/' replace='true'></Navigate>
    )
  }
  return children
  
};

export default LibrarianRoute;