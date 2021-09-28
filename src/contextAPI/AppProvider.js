import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

function AppProvider({ children }) {
  const [heartState, setHeartState] = useState(false);
  const [listItem, setListItem] = useState([]);
  //
  // FUNCOES E USO ACIMA
  //

  const [recipeInProgress, setInProgress] = useState({ cocktails: {}, meals: {} });

  const [favoriteList, setFavoriteList] = useState([]);

  //
  // FUNCOES E USO ACIMA
  //

  const contextValue = {
    setFavoriteList,
    favoriteList,
    heartState,
    setHeartState,
    recipeInProgress,
    setInProgress,
    listItem,
    setListItem,
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
