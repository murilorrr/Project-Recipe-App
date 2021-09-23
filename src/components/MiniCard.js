import PropTypes from 'prop-types';
import React from 'react';

export default function MiniCard({ args }) {
  const { index = '' } = args;
  return (
    <section data-testid={ `${index}-recipe-card` }>
      <section>
        <img
          Style="width:250px"
          src={ args.strMealThumb || args.strDrinkThumb || '' }
          alt={ args.strMeal }
          data-testid={ `${args.index}-card-img` }
        />
        <h3
          data-testid={ `${args.index}-card-name` }
        >
          {args.strMeal || args.strDrink || ''}

        </h3>
      </section>
    </section>
  );
}

MiniCard.propTypes = {
  args: PropTypes.objectOf().isRequired,
};
