"use client"
import React from 'react';
import ApiComponent from './components/ApiComponets';
const MyPage: React.FC = () => {
  return (
    <div>
      <h1>Página de Búsqueda de Recetas</h1>
      <ApiComponent />
    </div>
  );
};

export default MyPage;
