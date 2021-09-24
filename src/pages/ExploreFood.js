import React from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import ExploreFoodsOrDrinks from './ExploreFoodOrDrink';

function ExploreFood() {
  return (
    <div>
      <HeaderNoSearch word="Explorar Comidas" />
      <ExploreFoodsOrDrinks />
    </div>
  );
}

export default ExploreFood;
