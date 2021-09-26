import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import shareicon from '../images/shareIcon.svg';
import './CardRecipesMade.css';

function CardRecipesMade({ args }) {
  const { index } = args;
  const pageName = args.idMeal ? '/comidas' : '/bebidas';
  return (
    <div className="card-recipes-made-container">
      <div>
        <Link to={ `${pageName}/${args.idMeal || args.idDrink}` }>
          <img
            className="card-recipes-made-thumb"
            src={ args.strMealThumb || args.strDrinkThumb }
            alt={ args.strMeal || args.strDrink }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
      </div>
      <div>
        <div
          data-testid={ `${index}-horizontal-top-text` }
          className="card-recipes-made-category"
        >
          {args.strCategory}
        </div>
        <div
          data-testid={ `${index}-horizontal-name` }
          className="card-recipes-made-title"
        >
          <Link to={ `${pageName}/${args.idMeal || args.idDrink}` }>
            { args.strMeal || args.strDrink }
          </Link>
        </div>
        <div
          data-testid={ `${index}-horizontal-done-date` }
          className="card-recipes-made-date"
        >
          02/02/1234

        </div>
        {args.strTags.split(',')
          .map((tagName, i) => (
            <span
              key={ i }
              data-testid={ `${i}-${tagName}-horizontal-tag` }
              className="card-recipes-made-tags"
            >
              {tagName}
            </span>))}
      </div>
      <div>
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          className="card-recipes-made-share"
          src={ shareicon }
          alt="Icone de compartilhar"
        />
      </div>
    </div>
  );
}

CardRecipesMade.propTypes = {
  args: PropTypes.shape({
    idDrink: PropTypes.string,
    idMeal: PropTypes.string,
    index: PropTypes.number,
    pageName: PropTypes.string,
    strCategory: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
};

export default CardRecipesMade;
