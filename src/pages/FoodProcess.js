import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton, Loading, ShareButton } from '../components';
import HeaderRecipes from '../components/ComponentsRefeições/HeaderRecipes';
import Ingredients from '../components/ComponentsRefeições/Ingredients';
import Instruction from '../components/ComponentsRefeições/Instruction';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
function FoodProcess(props) {
  const { match: { params: { id } }, location, history } = props;

  const [favoriteHeart, setFavoriteHeart] = useState(false);
  const [item, setItem] = useState(false);

  if (localStorage
    .getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {}, meals: { [id]: [] },
    }));
  }

  useEffect(() => {
    const fetchById = async () => {
      const request = (await (await fetch(`${baseUrl}${id}`)).json());
      setItem(request.meals);
    };
    fetchById();
  }, [id]);

  if (!item) return (<Loading />);
  const { strMeal, strMealThumb, strCategory, strInstructions } = item[0];

  return (
    <div>
      <HeaderRecipes
        title={ strMeal }
        img={ strMealThumb }
        subtitle={ strCategory }
      />
      <div className="options" style={ { display: 'flex' } }>
        <FavoriteButton
          favoriteHeartState={ favoriteHeart }
          setFavoriteHeart={ setFavoriteHeart }
          item={ item }
          history={ history }
        />
        <ShareButton location={ location } inProcess="true" />
      </div>
      <div className="ingredientes">
        <h3>Ingredientes</h3>
        <Ingredients item={ item } dataTestId="ingredient-step" check />
      </div>
      <div className="instructions">
        <h3>Instruções</h3>
        <Instruction strInstructions={ strInstructions } />
      </div>
      <div>
        <Link to="/receitas-feitas">
          <button
            id="finish-recipe-btn"
            type="button"
            data-testid="finish-recipe-btn"
            disabled
          >
            Finalizar Receita
          </button>
        </Link>
      </div>
    </div>
  );
}

FoodProcess.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default FoodProcess;
