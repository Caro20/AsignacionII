import React, { useEffect, useState } from 'react';
import { fetchData } from './../api/index';
import DisplayComponent from './RecipeCard';
import '../styles/page.module.css';

const SearchComponent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = async () => {
    const searchData = await fetchData(searchTerm);
    setData(searchData);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Ingrese su búsqueda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Buscar</button>
      <DisplayComponent data={data} />
    </div>
  );
};

export default SearchComponent;
