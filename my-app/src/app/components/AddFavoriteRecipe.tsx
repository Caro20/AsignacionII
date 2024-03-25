"use client";
import { useLocalStorage } from '../hooks/UseLocalStorage';
import { useState } from 'react';
import "../styles/AddFavoriteRecipe.css"
interface Recipe {
  label: string;
  image: string;
  ingredients: string[];
}

const AddFavoriteRecipe: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [favorites, setFavorites] = useLocalStorage<Recipe[]>('favorites', []);
  const [clicked, setClicked] = useState(false);

  const addToFavorites = () => {
    setFavorites([...favorites, recipe]);
    alert(`Added to favorites: ${recipe.label}`);
    setClicked(true);
  };

  return <button className={`primary ${clicked ? 'clicked' : ''}`} onClick={addToFavorites}>Add to favorites</button>;
};

export default AddFavoriteRecipe;
