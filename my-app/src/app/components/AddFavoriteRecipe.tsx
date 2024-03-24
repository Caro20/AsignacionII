"use client";
import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
interface Recipe {
  label: string;
  image: string;
  ingredients: string[];
}

const AddFavoriteRecipe: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [favorites, setFavorites] = useLocalStorage<Recipe[]>('favorites', []);

  const addToFavorites = () => {
    setFavorites([...favorites, recipe]);
    console.log(`Added to favorites: ${recipe.label}`);
  };

  return <button onClick={addToFavorites}>Add to favorites</button>;
};

export default AddFavoriteRecipe;
