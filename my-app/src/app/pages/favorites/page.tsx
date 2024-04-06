'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Recipe } from '../../types/types';
import "@/app/styles/Header.css"
import "@/app/styles/FavoritesRecipes.css"
import Header from '@/app/components/Header';

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    const storedFavorites = localStorage.getItem('/pages/favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      <Header />
      <nav className="nav-bar">
        <ul>
          <li>
            <Link href={'/'} passHref>
              Home
            </Link>
          </li>
        </ul>
      </nav>
      {favorites.map((recipe, index) => (

        <div key={index} className='display-container'>
          <div className='recipe-card'>
            <h2 className='recipe-title'>{}</h2>
            <p className="recipe-cuisineType">{recipe.cuisineType}</p>
            <p className="recipe-dishType">{recipe.dishType}</p>
            <img className="recipe-image" src={recipe.image} alt={recipe.label} />
            <h4 className='recipe-title'>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        </div>

      ))}
    </div>
  );
};

export default FavoritesPage;



