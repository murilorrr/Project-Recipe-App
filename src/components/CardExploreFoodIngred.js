import PropTypes from 'prop-types';
import React from 'react';

const urlImageBase = 'https://www.themealdb.com/images/ingredients/';

function CardExploreFoodIngred({ index, strIngredient }) {
  return (
    <div className="card-explore-food-ingred" data-testid={ `${index}-ingredient-card` }>
      <img
        Style="width: 250px"
        src={ `${urlImageBase}/${strIngredient}.png` }
        alt={ `Foto de uma ingrediente chamando ${strIngredient}` }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
    </div>
  );
}

CardExploreFoodIngred.propTypes = {
  index: PropTypes.string.isRequired,
  strIngredient: PropTypes.string.isRequired,
};

export default CardExploreFoodIngred;
