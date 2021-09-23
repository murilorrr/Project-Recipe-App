import React from 'react';
import { node } from 'prop-types';
import Context from './Context';

function LoginProvider({ children }) {
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

LoginProvider.propTypes = {
  children: node.isRequired,
};

export default LoginProvider;
