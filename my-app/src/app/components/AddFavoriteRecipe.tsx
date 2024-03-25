'use client';
import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import '../styles/AddFavoriteRecipe.css';
interface Recipe {
  label: string;
  image: string;
  ingredients: string[];
}

const AddFavoriteRecipe: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [favorites, setFavorites] = useLocalStorage<Recipe[]>('favorites', []);

  const addToFavorites = () => {
    setFavorites([...favorites, recipe]);
    alert(`Added to favorites: ${recipe.label}`);
  };

  return (
    <button className="primary" onClick={addToFavorites}>
      Add to favorites
    </button>
  );
};

export default AddFavoriteRecipe;
