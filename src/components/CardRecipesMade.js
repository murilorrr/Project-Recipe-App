import PropTypes from 'prop-types';
import React from 'react';
import shareicon from '../images/shareIcon.svg';
import './CardRecipesMade.css';

function CardRecipesMade({ args }) {
  const { index, pageName } = args;
  console.log(pageName);
  return (
    <div className="card-recipes-made-container">
      <div>
        <img
          className="card-recipes-made-thumb"
          src={ args.strMealThumb || args.strDrinkThumb }
          alt=""
          data-testid={ `${index}-horizontal-image` }
        />
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
          {args.strMeal || args.strDrink }

        </div>
        <div
          data-testid={ `${index}-horizontal-done-date` }
          className="card-recipes-made-date"
        >
          02/02/1234

        </div>
        {args.strTags.split(',')
          .map((tagName) => (
            <span
              key={ index }
              data-testid={ `${index}-${tagName}-horizontal-tag` }
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
    index: PropTypes.string,
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
