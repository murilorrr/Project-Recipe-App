import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import Context from '../contextAPI/Context';

function FavoriteButton(props) {
  const { item, history: { location: { pathname } } } = props;
  const { heartState, setHeartState } = useContext(Context);

  const retornaComidaOuDrink = () => {
    let retorno;
    if (pathname.includes('bebidas')) {
      const { strCategory, strAlcoholic, strDrink, strDrinkThumb, idDrink } = item[0];
      retorno = {
        id: idDrink,
        type: 'bebida',
        area: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
    } else {
      const { strCategory, strMealThumb, strArea, strMeal, idMeal } = item[0];
      retorno = {
        id: idMeal,
        type: 'comida',
        area: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      };
    }
    return retorno;
  };

  const onClick = () => {
    const localStorageItems = JSON.parse(localStorage.getItem('favoriteRecipes'));

    const desfavoritar = () => {
      const resultFilter = localStorageItems
        .filter((element) => Object.values(element)[0] !== Object.values(item[0])[0]);
      localStorage.setItem('favoriteRecipes', JSON.stringify(resultFilter));
      setHeartState(!heartState);
    };

    const favoritar = () => {
      localStorageItems.push(retornaComidaOuDrink());
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
    console.log('favorite Button');
    // Se já existir um elemento com o mesmo id desta pagina, coração começa true;
    const localStorageItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const resultFilter = localStorageItems
      .some((element) => Object.values(element)[0] === Object.values(item[0])[0]);
    if (resultFilter === true) setHeartState(true);
  }, [setHeartState, item]);

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
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default FavoriteButton;
