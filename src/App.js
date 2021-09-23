import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBarHeader from './components/SearchBarHeader';
import { Bebidas, BebidasDetails, Comidas, ComidasDetails, Login } from './pages';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/comidas/:id" component={ ComidasDetails } />
        <Route path="/bebidas/:id" component={ BebidasDetails } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/teste" component={ SearchBarHeader } />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
