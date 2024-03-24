import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/index';
import DisplayComponent from './RecipeCard';
import Link from 'next/link';

import "../styles/ApiComponents.css"

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
    <div>

      <nav className="nav-bar">
        <ul>
          <li>
            <Link href={"/"} passHref>Home</Link>
          </li>
          <li>
            <Link href="/favorites" passHref>
              Favorites
            </Link>
          </li>
        </ul>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Enter your search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </nav>
      <div className="content-container">
        <DisplayComponent data={data} />
      </div>
    </div>
  );
};

export default SearchComponent;
