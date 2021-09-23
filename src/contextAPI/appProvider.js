import React from 'react';
import { node } from 'prop-types';
import Context from './Context';

function appProvider({ children }) {
  //
  // FUNCOES E USO ACIMA
  //
  const requestAPI = (id) => {
    console.log('request realizada');
    return id;
  };

  const contextValue = {
    requestAPI,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

appProvider.propTypes = {
  children: node.isRequired,
};

export default appProvider;
