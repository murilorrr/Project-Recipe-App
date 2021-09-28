import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

function AppProvider({ children }) {
  const [heartState, setHeartState] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [baseUrl, setBaseUrl] = useState('');
  //
  // FUNCOES E USO ACIMA
  //
  const requestAPI = (id) => id;

  const [recipeInProgress, setInProgress] = useState({ cocktails: {}, meals: {} });

  //
  // FUNCOES E USO ACIMA
  //

  const contextValue = {
    requestAPI,
    heartState,
    setHeartState,
    recipeInProgress,
    setInProgress,
    listItem,
    setListItem,
    baseUrl,
    setBaseUrl,
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
