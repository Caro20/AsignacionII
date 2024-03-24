"use client"
import React from 'react';
import ApiComponent from './components/ApiComponets';
import Header from './components/Header';

const MyPage: React.FC = () => {
  
  return (
    <div className='principal-container'>
      <Header/>
      <ApiComponent />
    </div>
  );
};

export default MyPage;
