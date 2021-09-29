import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import FavoriteButtonFavoriteRecipes from './FavoriteButtonFavoriteRecipes';
import ShareButton from '../ShareButton';

function CardFavoriteRecipe(props) {
  const { item } = props;
  const history = useHistory();
  const { type, area, category, id, name, image, alcoholicOrNot } = item;

  useEffect(() => {
  }, []);

  const onclick = () => {
    if (type === 'comida') {
      history.push(`/comidas/${id}`);
    }
    history.push(`/bebidas/${id}`);
  };

  return (
    <div>
      <div className="imageCard-favorites">
        <img
          aria-hidden="true"
          onClick={ onclick }
          width="200px"
          alt={ name }
          src={ image }
        />
      </div>
      <div>
        <p>
          {`${area} ${category} ${alcoholicOrNot}`}
        </p>
        <p>
          {name}
        </p>
        <FavoriteButtonFavoriteRecipes item={ item } />
        <ShareButton location={ history.location } id={ id } type={ type } />
      </div>

    </div>
  );
}

CardFavoriteRecipe.propTypes = {
  item: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default CardFavoriteRecipe;
