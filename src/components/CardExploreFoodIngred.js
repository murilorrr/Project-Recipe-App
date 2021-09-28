import PropTypes from 'prop-types';
import React from 'react';

function CardExploreFoodIngred({ index, name }) {
  return (
    <div className="card-explore-food-ingred" data-testid={ `${index}-ingredient-card` }>
      <img src="" alt="" data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ name }</p>
    </div>
  );
}

CardExploreFoodIngred.propTypes = {
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardExploreFoodIngred;
