import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton(props) {
  const { item } = props;
  const [heartState, setHeartState] = useState(false);

  const onClick = () => {
    const localStorageItems = JSON.parse(localStorage.getItem('favoriteRecipes'));

    const desfavoritar = () => {
      const resultFilter = localStorageItems
        .filter((element) => Object.values(element)[0] !== Object.values(item[0])[0]);
      localStorage.setItem('favoriteRecipes', JSON.stringify(resultFilter));
      setHeartState(!heartState);
    };

    const favoritar = () => {
      localStorageItems.push(...item);
      localStorage.setItem('favoriteRecipes', JSON.stringify(localStorageItems));
      setHeartState(!heartState);
    };

    if (heartState) {
      desfavoritar();
    } else {
      favoritar();
    }
  };

  useEffect(() => {
    // Se já existir um elemento com o mesmo id desta pagina, coração começa true;
  }, []);

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ onClick }
      src={ heartState ? 'blackHeartIcon' : 'whiteHeartIcon' }
    >
      <img
        width="30px"
        alt="favorite button"
        src={ heartState ? blackHeartIcon : whiteHeartIcon }
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default FavoriteButton;
