import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FavoritesPage: React.FC = () => {
  const [favorites] = useLocalStorage('favorites', []);

  return (
    <div>
      <h1>Recetas favoritas</h1>
      {favorites.map((recipe: any) => (
        <div key={recipe.uri}>
          <h2>{recipe.label}</h2>
          <img src={recipe.image} alt={recipe.label} />
          <ul>
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;

