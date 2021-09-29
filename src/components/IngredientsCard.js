import PropTypes from 'prop-types';
import React from 'react';

function IngredientsCard({ id, name, img, onClick, index }) {
  return (
    <button
      type="button"
      className="card-explore-food-ingred"
      data-testid={ `${index}-recipe-card` }
      onClick={ () => onClick(id) }
    >
      {id}
      <img
        aria-hidden="true"
        style={ { width: '200px' } }
        src={ img }
        alt={ `Foto de uma ingrediente chamando ${name}` }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{ name }</p>
    </button>
  );
}

const { number, string, func } = PropTypes;

IngredientsCard.propTypes = {
  id: number,
  img: string,
  index: number,
  name: string,
  onClick: func,
}.isRequired;

export default IngredientsCard;
