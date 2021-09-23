import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MiniCard({ args }) {
  const { i: index = '', p } = args;
  return (
    <Link to={ `${p}/${args.idMeal || args.idDrink}` }>
      <section data-testid={ `${index}-recipe-card` }>
        <section>
          <img
            Style="width:250px"
            src={ args.strMealThumb || args.strDrinkThumb }
            alt={ args.strMeal }
            data-testid={ `${args.index}-card-img` }
          />
          <h3
            data-testid={ `${args.index}-card-name` }
          >
            {args.strMeal || args.strDrink }

          </h3>
        </section>
      </section>
    </Link>
  );
}

MiniCard.propTypes = {
  args: PropTypes.objectOf().isRequired,
};
