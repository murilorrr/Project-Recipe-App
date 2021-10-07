import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavoriteButton,
  ShareButton, Loading } from '../components';
import HeaderRecipes from '../components/ComponentsRefeições/HeaderRecipes';
import Ingredients from '../components/ComponentsRefeições/Ingredients';
import Instruction from '../components/ComponentsRefeições/Instruction';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
function FoodProcess(props) {
  const { match: { params: { id } }, location, history } = props;

  const [favoriteHeart, setFavoriteHeart] = useState(false);
  const [item, setItem] = useState(false);

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
        <ShareButton location={ location } />
      </div>
      <div className="ingredientes">
        <h3>Ingredientes</h3>
        <Ingredients item={ item } dataTestId="-ingredient-step" check />
      </div>
      <div className="instructions">
        <h3>Instruções</h3>
        <Instruction strInstructions={ strInstructions } />
      </div>
      <div>
        <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
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
