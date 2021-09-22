import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotFound, Login } from './pages';
import DrinkDetails from './pages/DrinkDetails';
import FoodDetails from './pages/FoodDetails';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';

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
