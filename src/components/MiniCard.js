import PropTypes from 'prop-types';
import React from 'react';

export default function MiniCard({ args }) {
  const { index = '', strMealThumb = '', strMeal = '' } = args;
  return (
    <section data-testid={ `${index}-recipe-card` }>
      <section>
        <img
          Style="width:250px"
          src={ strMealThumb }
          alt={ strMeal }
          data-testid={ `${index}-card-img` }
        />
        <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
      </section>
    </section>
  );
}

MiniCard.propTypes = {
  args: PropTypes.objectOf().isRequired,
};
