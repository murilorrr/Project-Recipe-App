import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {FoodDetails } from './pages/FoodDetails';


function App() {
  return (
    <Switch>
      <Route path="/perfil" component={ Profile } />
      <Route path="/comidas/:id" component={ FoodDetails } />
      <Route path="/bebidas/:id" component={ DrinkDetails } />
      <Route path="/comidas" component={ Foods } />
      <Route path="/bebidas" component={ Drinks } />
      <Route exact path="/" component={ Login } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
