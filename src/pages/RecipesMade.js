import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { CardRecipesMade, HeaderNoSearch } from '../components';

const listaDeReceitasFeitas = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: [
      'Pasta',
      'Curry',
    ],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

// Essa função serve para filtar a lista de receitas por drink, meal ou se e all
const filterFood = (receita, FoodType) => {
  const list = Object.values(receita);
  if (list.includes(FoodType)) return true;
  if (FoodType === 'All') return true;
  return false;
};

function RecipesMade() {
  const [FoodType, setFilterFood] = useState('All');
  const { location } = useHistory();
  console.log(location);

  return (
    <div>
      <HeaderNoSearch word="Receitas Feitas" />
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
      <div>
        {listaDeReceitasFeitas
          .filter((receita) => filterFood(receita, FoodType))
          .map((receita, index) => (<CardRecipesMade
            key={ receita.id }
            args={ { ...receita, index, location } }
          />))}
      </div>
    </div>
  );
}

export default RecipesMade;
