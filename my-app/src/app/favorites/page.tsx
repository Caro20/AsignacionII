'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Ingredient {
  text: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

interface Recipe {
  label: string;
  image: string;
  ingredients: Ingredient[];
}

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link href={'/'} passHref>
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Mis recetas favoritas</h1>
      {favorites.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.label}</h2>
          <img src={recipe.image} alt={recipe.label} />
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;



