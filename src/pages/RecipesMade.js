import React, { useState } from 'react';
import { CardRecipesMade } from '../components';
import HeaderNoSearch from '../components/HeaderNoSearch';

const meal = {

  idMeal: '52771',
  strMeal: 'Spicy Arrabiata Penne',
  strDrinkAlternate: null,
  strCategory: 'Vegetarian',
  strArea: 'Italian',
  strInstructions: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  strTags: 'Pasta,Curry',
  strYoutube: 'https://www.youtube.com/watch?v=1IszT_guI08',
  strIngredient1: 'penne rigate',
  strIngredient2: 'olive oil',
  strIngredient3: 'garlic',
  strIngredient4: 'chopped tomatoes',
  strIngredient5: 'red chile flakes',
  strIngredient6: 'italian seasoning',
  strIngredient7: 'basil',
  strIngredient8: 'Parmigiano-Reggiano',
  strIngredient9: '',
  strIngredient10: '',
  strIngredient11: '',
  strIngredient12: '',
  strIngredient13: '',
  strIngredient14: '',
  strIngredient15: '',
  strIngredient16: null,
  strIngredient17: null,
  strIngredient18: null,
  strIngredient19: null,
  strIngredient20: null,
  strMeasure1: '1 pound',
  strMeasure2: '1/4 cup',
  strMeasure3: '3 cloves',
  strMeasure4: '1 tin ',
  strMeasure5: '1/2 teaspoon',
  strMeasure6: '1/2 teaspoon',
  strMeasure7: '6 leaves',
  strMeasure8: 'spinkling',
  strMeasure9: '',
  strMeasure10: '',
  strMeasure11: '',
  strMeasure12: '',
  strMeasure13: '',
  strMeasure14: '',
  strMeasure15: '',
  strMeasure16: null,
  strMeasure17: null,
  strMeasure18: null,
  strMeasure19: null,
  strMeasure20: null,
  strSource: null,
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,

};

const drink = {
  idDrink: '17216',
  strDrink: 'Tommy\'s Margarita',
  strDrinkAlternate: null,
  strTags: 'IBA,NewEra',
  strVideo: null,
  strCategory: 'Ordinary Drink',
  strIBA: 'New Era Drinks',
  strAlcoholic: 'Alcoholic',
  strGlass: 'Old-Fashioned glass',
  strInstructions: 'Shake and strain into a chilled cocktail glass.',
  strInstructionsES: null,
  strInstructionsDE: 'Schütteln und in ein gekühltes Cocktailglas abseihen.',
  strInstructionsFR: null,
  strInstructionsIT: 'Shakerare e filtrare in una coppetta da cocktail ghiacciata.',
  'strInstructionsZH-HANS': null,
  'strInstructionsZH-HANT': null,
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg',
  strIngredient1: 'Tequila',
  strIngredient2: 'Lime Juice',
  strIngredient3: 'Agave syrup',
  strIngredient4: null,
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: '4.5 cl',
  strMeasure2: '1.5 cl',
  strMeasure3: '2 spoons',
  strMeasure4: null,
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strImageSource: null,
  strImageAttribution: null,
  strCreativeCommonsConfirmed: 'No',
  dateModified: '2017-09-02 18:37:54',

};

const listaDeReceitasFeitas = [meal, drink];

// Essa função serve para filtar a lista de receitas por drink, meal ou se e all
const filterFood = (receita, FoodType) => {
  const list = Object.keys(receita);
  if (list.includes(FoodType)) return true;
  if (FoodType === 'All') return true;
  return false;
};

function RecipesMade() {
  const [FoodType, setFilterFood] = useState('All');

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
          value="idMeal"
          data-testid="filter-by-food-btn"
        >
          Foods
        </button>
        <button
          onClick={ (e) => setFilterFood(e.target.value) }
          type="button"
          value="idDrink"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div>
        {listaDeReceitasFeitas
          .filter((receita) => filterFood(receita, FoodType))
          .map((receita, index) => (<CardRecipesMade
            key={ receita.idDrink || receita.idMeal }
            args={ { ...receita, index } }
          />))}
      </div>
    </div>
  );
}

export default RecipesMade;
