import PropTypes from 'prop-types';
import React from 'react';

function IngredientsCard({ id, name, img, onClick, index }) {
  return (
    <div className="card-explore-food-ingred" data-testid={ `${index}-recipe-card` }>
      <img
        onClick={ () => onClick(id) }
        aria-hidden="true"
        Style="width: 200px"
        src={ img }
        alt={ `Foto de uma ingrediente chamando ${name}` }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{ name }</p>
    </div>
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
