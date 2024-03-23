import React, { useState } from 'react';
import { fetchData } from './../api/index';
const ApiComponent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = async () => {
    const searchData = await fetchData(searchTerm); // Llama a fetchData con el término de búsqueda
    setData(searchData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su búsqueda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {data && data.hits && data.hits.map((hit: any) => (
        <div key={hit.recipe.uri}>
          <h3>{hit.recipe.label}</h3>
          <img src={hit.recipe.image} alt={hit.recipe.label} />
        </div>
      ))}
    </div>
  );
};

export default ApiComponent;
