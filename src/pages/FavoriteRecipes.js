import React from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import FavoriteRecipesContent from '../components/FavoriteRecipesContent';

function FavoriteRecipes() {
  return (
    <div>
      <HeaderNoSearch word="Receitas Favoritas" />
      <FavoriteRecipesContent />
    </div>
  );
}

export default FavoriteRecipes;
