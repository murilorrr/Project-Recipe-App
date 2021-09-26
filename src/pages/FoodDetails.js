import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavoriteButton, CarrouselRecomendations,
  ShareButton, Loading, StartRecipe } from '../components';
import HeaderRecipes from '../components/ComponentsRefeições/HeaderRecipes';
import Ingredients from '../components/ComponentsRefeições/Ingredients';
import Instruction from '../components/ComponentsRefeições/Instruction';
import Video from '../components/ComponentsRefeições/Video';

function FoodDetails(props) {
  const { match: { params: { id } }, location, history } = props;

  const [favoriteHeart, setFavoriteHeart] = useState(false);
  const [recomendation, setRecomendation] = useState([{}]);
  const [item, setItem] = useState([]);

  const fetchById = async (idLocation) => {
    const response = (await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idLocation}`)).json()).meals;
    setItem(response);
  };

  const fetchFoodOrDrinkRecomendations = async () => {
    const response = (await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json()).drinks;
    setRecomendation(response);
  };

  useEffect(() => {
    const fetchAndSet = async () => {
      await fetchById(id);
      await fetchFoodOrDrinkRecomendations();
    };
    fetchAndSet();
  }, [id]);

  if (item.length === 0) return (<Loading />);
  const { strMeal, strMealThumb, strCategory, strInstructions, strYoutube } = item[0];

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
        />
        <ShareButton location={ location } />
      </div>
      <Ingredients item={ item } />
      <div className="instructions">
        <Instruction strInstructions={ strInstructions } />
      </div>
      <div className="video">
        <Video strYoutube={ strYoutube } />
      </div>
      <h3>Recomendadas</h3>
      <CarrouselRecomendations recomendation={ recomendation } drink />
      <StartRecipe id={ id } history={ history } />
    </div>
  );
}

FoodDetails.propTypes = {
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

export default FoodDetails;
