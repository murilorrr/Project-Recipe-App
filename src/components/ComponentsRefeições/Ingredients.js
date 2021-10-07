import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router';

function Ingredients({ item, dataTestId, check }) {
  const { pathname } = useLocation();
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
                ? <input type="checkbox" />
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
