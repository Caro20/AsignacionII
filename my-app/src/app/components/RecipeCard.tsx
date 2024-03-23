import React from 'react';
import '../styles/page.module.css';

const DisplayComponent: React.FC<{ data: any }> = ({ data }) => {
  const handleDisplay = () => {
    if (!data) return;
    return data.hits.map((hit: any) => (
      <div className="recipe-card" key={hit.recipe.uri}>
        <h3 className="recipe-title">{hit.recipe.label}</h3>
        <img className="recipe-image" src={hit.recipe.image} alt={hit.recipe.label} />
      </div>
    ));
  };

  return <div className="display-container">{handleDisplay()}</div>;
};

export default DisplayComponent;
