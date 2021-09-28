import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../../contextAPI/Context';
import FavoriteButton from '../FavoriteButton';

function CardFavoriteRecipe({ item }) {
  const { setHeartState } = useContext(Context);
  // obj item
  //   alcoholicOrNot: ""
  // area: "Canadian"
  // category: "Dessert"
  // id: "52929"
  // image: "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg"
  // name: "Timbits"
  useEffect(() => {
    setHeartState(true);
  }, []);

  return (
    <div>
      <FavoriteButton item={ item } />
      s
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
  }).isRequired,
};

export default CardFavoriteRecipe;
