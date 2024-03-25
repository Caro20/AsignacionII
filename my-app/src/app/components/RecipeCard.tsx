import React, { useState, useEffect, Suspense } from 'react';
import AddFavoriteRecipe from './AddFavoriteRecipe';
import SkeletonComponent from './SkeletonComponent';
import Link from 'next/link';
import '../styles/RecipeCard.css';
import '../styles/Pagination.css';

const DisplayComponent: React.FC<{ data: any }> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  const toggleIngredients = (recipeUri: string) => {
    setSelectedRecipe(recipeUri === selectedRecipe ? null : recipeUri);
  };

  const renderIngredients = (ingredients: any[]) => {
    return (
      <ul className="ingredients-list">
        {ingredients.map((ingredient: any, index: number) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    );
  };

  const handleDisplay = () => {
    if (loading) {
      return (
        <div className="skeleton-container">
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
        </div>
      );
    }

    if (!data || !data.hits) return null;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.hits.slice(startIndex, endIndex).map((hit: any) => (
      <div className="recipe-card" key={hit.recipe.uri}>
        <h3 className="recipe-title">{hit.recipe.label}</h3>
        <p className="recipe-cuisineType">{hit.recipe.cuisineType}</p>
        <p className="recipe-dishType">{hit.recipe.dishType}</p>
        <img
          className="recipe-image"
          src={hit.recipe.image}
          alt={hit.recipe.label}
        />
        <AddFavoriteRecipe recipe={hit.recipe} />
        <h4 className='recipe-title'>Ingredients</h4>
        <div className="ingredients-scroll">
          
          {renderIngredients(hit.recipe.ingredients)}
        </div>
        
      </div>
    ));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="display-container">
      <Suspense
        fallback={
          <div className="skeleton-container">
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
          </div>
        }
      >
        {handleDisplay()}
      </Suspense>
      {data && data.hits && (
        <div className="pagination">
          {[...Array(Math.ceil(data.hits.length / itemsPerPage))].map(
            (_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)} className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}>
                {index + 1}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default DisplayComponent;
