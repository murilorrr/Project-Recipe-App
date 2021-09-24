import React from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import ExploreFoodsOrDrinks from './ExploreFoodOrDrink';


function ExploreDrink() {
  return (
    <div>
      <HeaderNoSearch word="Explorar Bebidas" />
      <ExploreFoodsOrDrinks />
    </div>
  );
}

export default ExploreDrink;
