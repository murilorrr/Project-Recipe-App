import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotFound, Comidas, Bebidas, ComidasDetails,
  BebidasDetails, Login } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/comidas" component={ Comidas } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route path="/comidas/:id" component={ ComidasDetails } />
      <Route path="/bebidas/:id" component={ BebidasDetails } />
      <Route exact path="/" component={ Login } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
