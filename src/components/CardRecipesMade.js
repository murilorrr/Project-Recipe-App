import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './CardRecipesMade.css';
import ShareIcon from './ShareIcon';

function CardRecipesMade({ args }) {
  const { index } = args;
  const pageName = args.type === 'comida' ? '/comidas' : '/bebidas';
  return (
    <div className="card-recipes-made-container">
      <div>
        <Link to={ `${pageName}/${args.id}` }>
          <img
            className="card-recipes-made-thumb"
            src={ args.image }
            alt={ args.image }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
      </div>
      <div>
        <div
          data-testid={ `${index}-horizontal-top-text` }
          className="card-recipes-made-category"
        >
          {`${args.area} - ${args.category} - ${args.alcoholicOrNot}` }
        </div>
        <div
          data-testid={ `${index}-horizontal-name` }
          className="card-recipes-made-title"
        >
          <Link to={ `${pageName}/${args.id}` }>
            { args.name }
          </Link>
        </div>
        <div
          data-testid={ `${index}-horizontal-done-date` }
          className="card-recipes-made-date"
        >
          {args.doneDate}

        </div>
        {args.tags.map((tagName) => (
          <span
            key={ 10 }
            data-testid={ `${index}-${tagName}-horizontal-tag` }
            className="card-recipes-made-tags"
          >
            {tagName}
          </span>))}
      </div>
      <div>
        <ShareIcon
          pathname={ `${pageName}/${args.id}` }
          dataTestid={ `${index}-horizontal-share-btn` }
        />
      </div>
    </div>
  );
}

CardRecipesMade.propTypes = {
  args: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(),
    index: PropTypes.string,
  }).isRequired,
};

export default CardRecipesMade;
