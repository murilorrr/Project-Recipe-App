import React from 'react';
import PropTypes from 'prop-types';

function FavoriteButton(props) {
  const { setFavoriteHeart, favoriteHeartState, item } = props;
  const style = {};
  if (favoriteHeartState) {
    style.backgroundColor = 'red';
  } else {
    style.backgroundColor = 'grey';
  }

  const onClick = () => {
    const localStorageItems = JSON.parse(localStorage.getItem('favoriteRecipes'));

    const desfavoritar = () => {
      const resultFilter = localStorageItems
        .filter((element) => Object.values(element)[0] !== Object.values(item[0])[0]);
      localStorage.setItem('favoriteRecipes', JSON.stringify(resultFilter));
      setFavoriteHeart(!favoriteHeartState);
    };

    const favoritar = () => {
      localStorageItems.push(...item);
      localStorage.setItem('favoriteRecipes', JSON.stringify(localStorageItems));
      setFavoriteHeart(!favoriteHeartState);
    };

    if (favoriteHeartState) {
      desfavoritar();
    } else {
      favoritar();
    }
  };

  return (
    <button
      type="button"
      style={ style }
      data-testid="favorite-btn"
      onClick={ onClick }
    >
      Favorite

    </button>
  );
}

FavoriteButton.propTypes = {
  setFavoriteHeart: PropTypes.func.isRequired,
  favoriteHeartState: PropTypes.bool.isRequired,
  item: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default FavoriteButton;
