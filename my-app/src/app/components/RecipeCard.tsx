import React from 'react';

interface Recipe {
  label: string;
  image: string;
  ingredients: string[]; // Agrega la lista de ingredientes a la interfaz Recipe
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { label, image, ingredients } = recipe; // Agrega ingredients aquí

  return (
    <div className="recipe-card">
      <img className="recipe-image" src={image} alt={label} />
      <div className="recipe-details">
        <h2 className="recipe-title">{label}</h2>
        <h3>Ingredientes:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
