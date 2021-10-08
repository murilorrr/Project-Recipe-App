import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// finish-recipe-btn

function Ingredients({ item, dataTestId, check }) {
  const { pathname } = useLocation();
  const idPage = pathname.split('/')[2];
  const namePage = pathname.split('/')[1] === 'comidas' ? 'meals' : 'cocktails';

  const getValuesInObject = (obj, value) => {
    const lista = [];
    Object.keys(obj).forEach((key) => {
      if (key.includes(value) && obj[key] !== '' && obj[key] !== null) {
        lista.push(obj[key]);
      }
    });
    return lista;
  };

  const ingredientsList = getValuesInObject(item[0], 'strIngredient');
  const ingredientsMeansure = getValuesInObject(item[0], 'strMeasure');

  const saveRecipe = (ingredientPosition) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

    const ingredientList = inProgressRecipes[namePage];

    if (ingredientList[idPage].includes(ingredientPosition)) {
      ingredientList[idPage].splice(
        ingredientList[idPage].indexOf(ingredientPosition), 1,
      );

      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
      if (ingredientList[idPage].length === ingredientsList.length) {
        document.getElementById('finish-recipe-btn').disabled = false;
      } else {
        document.getElementById('finish-recipe-btn').disabled = true;
      }

      return;
    }

    ingredientList[idPage].push(ingredientPosition);
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    if (ingredientList[idPage].length === ingredientsList.length) {
      document.getElementById('finish-recipe-btn').disabled = false;
    } else {
      document.getElementById('finish-recipe-btn').disabled = true;
    }
    return true;
  };

  const handleCheked = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgressRecipes) return null;
    const ingredientList = inProgressRecipes[namePage];

    if (!Object.keys(ingredientList).length) return null;

    ingredientList[idPage].forEach((index) => {
      if (!document.getElementById(index)) return null;
      document.getElementById(index).setAttribute('checked', 'on');
    });

    return true;
  };

  useEffect(() => {
    handleCheked();
  });

  const handleClick = (event) => {
    const { id } = event.target;
    saveRecipe(id);
  };

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
