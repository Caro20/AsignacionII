import React, { useState } from 'react';
import AddFavoriteRecipe from './AddFavoriteRecipe';
import "../styles/RecipeCard.css"
import "../styles/pagination.css"

const DisplayComponent: React.FC<{ data: any }> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDisplay = () => {

    const [showIngredients, setShowIngredients] = useState(false);

    const toggleIngredients = () => {
      setShowIngredients(!showIngredients);
    };

    const renderIngredients = (ingredients: any[]) => {
      return (
        <ul className='ingredients-list'>
          {ingredients.map((ingredient: any, index: number) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      );
    };

    if (!data || !data.hits) return;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    return data.hits.slice(startIndex, endIndex).map((hit: any) => (

      <div className="recipe-card" key={hit.recipe.uri}>
        <h3 className="recipe-title">{hit.recipe.label}</h3>
        <p className="recipe-cuisineType">{hit.recipe.cuisineType}</p>
        <p className="recipe-dishType">{hit.recipe.dishType}</p>
        <img className="recipe-image" src={hit.recipe.image} alt={hit.recipe.label} />
        <AddFavoriteRecipe recipe={hit.recipe} />
        <button className='show-ingredients' onClick={toggleIngredients}>Show Ingredients</button>
        {showIngredients && (
          <>
            <h4>Ingredients</h4>
            {renderIngredients(hit.recipe.ingredients)}
          </>
        )}
      </div>


    ));
  };

  return (
    <div className="display-container">
      {handleDisplay()}
      {data && data.hits && (
          <ul className="pagination">
            {[...Array(Math.ceil(data.hits.length / itemsPerPage))].map((_, index) => (
              <li key={index}>
                <button
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
      )}
    </div>
  );
};

export default DisplayComponent;



