import React from 'react';
import { node } from 'prop-types';
import Context from './Context';

function LoginProvider({ children }) {
  //
  // FUNCOES E USO ACIMA
  //

  const contextValue = {
    // prover para a aplicação
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
