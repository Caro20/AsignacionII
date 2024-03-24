import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { fetchData } from '../api/index';
import DisplayComponent from './RecipeCard';
import FavoritesPage from './FavoriteRecipeList';
import Link from 'next/link';

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
      <div className="title-page">
        <h1>Recipe search page</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link href={"/"} passHref>Home</Link>
          </li>
          <li>
            <Link href="/favorites" passHref>
              Add Favorite Recipe
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
