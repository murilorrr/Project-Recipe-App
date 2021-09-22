import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route path="/comidas" component={ comidas } />
      <Route path="/bebidas" component={ bebidas } />
      <Route path="/comidas/:id" component={ comidasDetails } />
      <Route path="/bebidas/:id" component={ bebidasDetails } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
