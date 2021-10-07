import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Ingredients({ item, dataTestId, check }) {
  const { pathname } = useLocation();
  const idPage = pathname.split('/')[2];
  const getValuesInObject = (obj, value) => {
    const lista = [];
    Object.keys(obj).forEach((key) => {
      if (key.includes(value) && obj[key] !== '' && obj[key] !== null) {
        lista.push(obj[key]);
      }
    });
    return lista;
  };

  const saveRecipe = (ingredientPosition) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { meals } = inProgressRecipes;

    console.log(meals[idPage].includes(ingredientPosition));
    if (meals[idPage].includes(ingredientPosition)) {
      meals[idPage].splice(ingredientPosition, 1);
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
      return;
    }

    meals[idPage].push(ingredientPosition);
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    return true;
  };

  const handleClick = (event) => {
    const { id } = event.target;
    saveRecipe(id);
  };

  const ingredientsList = getValuesInObject(item[0], 'strIngredient');
  const ingredientsMeansure = getValuesInObject(item[0], 'strMeasure');
  return (
    <div className="ingredients">
      <ul>
        {ingredientsList.map((ingredient, index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-${dataTestId}` }
          >
            {
              check
                ? <input id={ index } type="checkbox" onClick={ handleClick } />
                : null
            }
            <span>{ingredient}</span>
            <span>{ingredientsMeansure[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  check: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  item: PropTypes.arrayOf().isRequired,
};

export default Ingredients;
