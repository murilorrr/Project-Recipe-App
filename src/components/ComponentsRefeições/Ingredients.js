import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Ingredients({ item, dataTestId, check }) {
  const { pathname } = useLocation();
  const idPage = pathname.split('/')[2];

  useEffect(() => {
    handleCheked();
  });

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

    if (meals[idPage].includes(ingredientPosition)) {
      meals[idPage].splice(meals[idPage].indexOf(ingredientPosition), 1);
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
      return;
    }

    meals[idPage].push(ingredientPosition);
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    return true;
  };

  const handleCheked = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgressRecipes) return null;

    const { meals } = inProgressRecipes;
    if (!Object.keys(meals).length) return;

    meals[idPage].forEach((index) => {
      document.getElementById(index).checked = 'on';
    });

    return true;
  };

  const handleClick = (event) => {
    const { id } = event.target;
    saveRecipe(id);
  };

  const ingredientsList = getValuesInObject(item[0], 'strIngredient');
  const ingredientsMeansure = getValuesInObject(item[0], 'strMeasure');
  console.log(item);

  return (
    <div className="ingredients">
      <ul>
        {ingredientsList.map((ingredient, index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-${dataTestId}` }
          >
            {
              !check || <input
                id={ index }
                type="checkbox"
                onClick={ handleClick }
              />
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
