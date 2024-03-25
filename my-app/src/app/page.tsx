"use client"
import React, { Suspense } from 'react';
import ApiComponent from './components/ApiComponets';
import Header from './components/Header';

const MyPage: React.FC = () => {
  
  return (
    <div className='principal-container'>
      <Header/>
      <Suspense fallback={<div>Cargando...</div>}>
        <ApiComponent />
      </Suspense>
    </div>
  );
};

export default MyPage;
