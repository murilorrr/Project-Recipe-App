import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Bebidas,
  BebidasDetails,
  ComidasDetails,
  Login,
  NotFound,
  RecipeFoods } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/comidas/:id" component={ ComidasDetails } />
      <Route path="/bebidas/:id" component={ BebidasDetails } />
      <Route path="/comidas" component={ RecipeFoods } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route exact path="/" component={ Login } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
