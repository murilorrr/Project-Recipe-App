import React from "react";

function ingredients({item}) {
  const getValuesInObject = (obj, value) => {
        const lista = [];
        Object.keys(obj).forEach((key) => {
            if (key.includes(value) && obj[key] !== '' && obj[key] !== null) {
            lista.push(obj[key]);
            }
        });
        return lista;
        };
    
  const ingredients = getValuesInObject(item[0], 'strIngredient');
  const ingredientsMeansure = getValuesInObject(item[0], 'strMeasure');
    return(
        <div className="ingredients">
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
              <span>{ingredient}</span>
              <span>{ingredientsMeansure[index]}</span>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ingredients