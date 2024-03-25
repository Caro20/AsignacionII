import React, { useState, Suspense } from 'react';
import AddFavoriteRecipe from './AddFavoriteRecipe';

const DisplayComponent: React.FC<{ data: any }> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleDisplay = () => {
    if (!data || !data.hits) return;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.hits.slice(startIndex, endIndex).map((hit: any) => (
      <div className="recipe-card" key={hit.recipe.uri}>
        <h3 className="recipe-title">{hit.recipe.label}</h3>
        <img className="recipe-image" src={hit.recipe.image} alt={hit.recipe.label} />
        <AddFavoriteRecipe recipe={hit.recipe} />
      </div>
    ));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="display-container">
      <Suspense fallback={<div>Cargando...</div>}>
        {handleDisplay()}
      </Suspense>
      {data && data.hits && (
        <div className="pagination">
          {[...Array(Math.ceil(data.hits.length / itemsPerPage))].map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayComponent;
