import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

function AppProvider({ children }) {
  const [listItem, setListItem] = useState([]);
  //
  // FUNCOES E USO ACIMA
  //
  const requestAPI = (id) => {
    console.log('request realizada');
    return id;
  };

  const contextValue = {
    requestAPI,
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
