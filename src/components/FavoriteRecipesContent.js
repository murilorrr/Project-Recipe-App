import React, { useState, useEffect } from 'react';
import CardFavoriteRecipe from './ComponentsRefeições/CardFavoriteRecipe';

function FavoriteRecipesContent() {
  const [listRecipes, setListRecipes] = useState([]);

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localStorageItems !== null) setListRecipes(localStorageItems);
  }, []);

  // const localStorageItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // const resultFilter = localStorageItems
  //   .some((element) => Object.values(element)[0] === Object.values(item[0])[0]);
  // if (resultFilter === true) setHeartState(true);

  return (
    <div className="recipeContent">
      {listRecipes.map((el) => <CardFavoriteRecipe key={ el } item={ el } />)}
    </div>
  );
}

export default FavoriteRecipesContent;
