import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Login, NotFound } from './pages';
import DrinkDetails from './pages/DrinkDetails';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreDrinkIngred from './pages/ExploreDrinkIngred';
import ExploreFood from './pages/ExploreFood';
import ExploreFoodIngred from './pages/ExploreFoodIngred';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails';
import Foods from './pages/Foods';
import OriginFood from './pages/OriginFood';
import Profile from './pages/Profile';
import RecipesMade from './pages/RecipesMade';

function App() {
  return (
    <Switch>
      <Route path="/receitas-feitas" component={ RecipesMade } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route path="/explorar/comidas/area" component={ OriginFood } />
      <Route path="/explorar/comidas/ingredientes" component={ ExploreFoodIngred } />
      <Route path="/explorar/bebidas/ingredientes" component={ ExploreDrinkIngred } />
      <Route path="/explorar/bebidas" component={ ExploreDrink } />
      <Route path="/explorar/comidas" component={ ExploreFood } />
      <Route path="/explorar" component={ Explore } />
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
