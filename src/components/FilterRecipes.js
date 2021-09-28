import React from 'react';

function FilterRecipes({setFilterFood}) {
  // const filterFood = (receita, FoodType) => {
  //   const list = Object.values(receita);
  //   if (list.includes(FoodType)) return true;
  //   if (FoodType === 'All') return true;
  //   return false;
  // };

  return (
    <div>
      <button
        onClick={ (e) => setFilterFood(e.target.value) }
        type="button"
        value="All"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        onClick={ (e) => setFilterFood(e.target.value) }
        type="button"
        value="comida"
        data-testid="filter-by-food-btn"
      >
        Foods
      </button>
      <button
        onClick={ (e) => setFilterFood(e.target.value) }
        type="button"
        value="bebida"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

export default FilterRecipes;
