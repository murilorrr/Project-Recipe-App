import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import appProvider from './contextAPI/appProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBarHeader from './components/SearchBarHeader';

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={ appProvider }> */}
      <Switch>
        <Route path="/comidas" component={ SearchBarHeader } />
        <Route path="/bebidas" component={ SearchBarHeader } />
        {/*
          <Route path="/comidas/:id" component={ comidasDetails } />
          <Route path="/bebidas/:id" component={ bebidasDetails } />
          <Route exact path="/" component={ Login } /> */}
        <Route exact path="/teste" component={ SearchBarHeader } />
      </Switch>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
