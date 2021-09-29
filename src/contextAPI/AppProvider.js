import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

function AppProvider({ children }) {
  const [heartState, setHeartState] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [baseUrlFood, setBaseUrlFood] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const [baseUrlDrink, setBaseUrlDrink] = useState('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const [recipeInProgress, setInProgress] = useState({ cocktails: {}, meals: {} });
  const [favoriteList, setFavoriteList] = useState([]);

  const contextValue = {
    setFavoriteList,
    favoriteList,
    heartState,
    setHeartState,
    recipeInProgress,
    setInProgress,
    listItem,
    setListItem,
    baseUrlFood,
    setBaseUrlFood,
    baseUrlDrink,
    setBaseUrlDrink,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

AppProvider.propTypes = {
  children: node.isRequired,
};

export default AppProvider;
