import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import appProvider from './contextAPI/appProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeFoods from './pages/RecipeFoods';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={ appProvider }> */}
      <Switch>
        <Route path="/comidas" component={ RecipeFoods } />
        {/*  <Route path="/bebidas" component={ bebidas } />
          <Route path="/comidas/:id" component={ comidasDetails } />
          <Route path="/bebidas/:id" component={ bebidasDetails } /> */}
        <Route exact path="/" component={ Login } />
      </Switch>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
