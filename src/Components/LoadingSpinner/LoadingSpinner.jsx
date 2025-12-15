import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className='min-h-screen min-w-screen flex justify-center items-center'>
      <span className="loading loading-spinner text-primary loading-xl"></span>
    </div>
  );
};

export default LoadingSpinner;