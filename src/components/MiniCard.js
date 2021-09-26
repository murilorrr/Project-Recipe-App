import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MiniCard({ args }) {
  const { i: index = '', page } = args;
  return (
    <Link to={ `${page}/${args.idMeal || args.idDrink}` }>
      <section>
        <section data-testid={ `${index}-recipe-card` }>
          <img
            style={ { width: '250px' } }
            src={ args.strMealThumb || args.strDrinkThumb }
            alt={ args.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <h3
            data-testid={ `${index}-card-name` }
          >
            {args.strMeal || args.strDrink }
          </h3>
        </section>
      </section>
    </Link>
  );
}

MiniCard.propTypes = {
  args: PropTypes.shape({
    i: PropTypes.number.isRequired,
    page: PropTypes.string.isRequired,
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
};
