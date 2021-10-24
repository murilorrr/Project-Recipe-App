import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FavoriteButton, Loading, ShareButton } from '../components';
import HeaderRecipes from '../components/ComponentsRefeições/HeaderRecipes';
import Ingredients from '../components/ComponentsRefeições/Ingredients';
import Instruction from '../components/ComponentsRefeições/Instruction';
import '../CSS/Drink&FoodDetails.css';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
function DrinkProcess(props) {
  const { match: { params: { id } }, location, history } = props;

  const [favoriteHeart, setFavoriteHeart] = useState(false);
  const [item, setItem] = useState([]);

  function handleClick() {
    history.push("/receitas-feitas");
  }

  if (localStorage
    .getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: { [id]: [] }, meals: { },
    }));
  }

  useEffect(() => {
    const fetchById = async () => {
      const request = (await (await fetch(`${baseUrl}${id}`)).json());
      setItem(request.drinks);
    };
    fetchById();
  }, [id]);

  if (!item.length) return (<Loading />);
  const { strAlcoholic, strDrinkThumb, strDrink, strInstructions } = item[0];

  const click = () => {
    // colocar a receita no local Storage na chave doneRecipes
    const localStorageItems = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    localStorageItems.push(item)
    localStorage.setItem('doneRecipes', JSON.stringify(localStorageItems));
    console.log('CLICK');
    handleClick();
  }

  return (
    <div className="page-food-container">
      <div className="infos">
        <HeaderRecipes
          title={ strDrink }
          img={ strDrinkThumb }
          subtitle={ strAlcoholic }
        />
        <div className="options" style={ { display: 'flex' } }>
          <FavoriteButton
            favoriteHeartState={ favoriteHeart }
            setFavoriteHeart={ setFavoriteHeart }
            item={ item }
            history={ history }
          />
          <ShareButton location={ location } inProcess />
        </div>
      </div>
      <div className="ingredientes">
        <h3>Ingredientes</h3>
        <Ingredients item={ item } dataTestId="ingredient-step" check />
      </div>
      <div className="instructions">
        <Instruction strInstructions={ strInstructions } />
      </div>
      <div className="finisher-link">
        
      </div>
      <button
          id="finish-recipe-btn"
          type="button"
          data-testid="finish-recipe-btn"
          onClick={ click }
        >
          Finalizar Receita
        </button>
    </div>
  );
}

DrinkProcess.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default DrinkProcess;
