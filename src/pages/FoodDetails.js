/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavoriteButton, CarrouselRecomendations, ShareButton, Loading } from '../components';

// import Context from '../contextAPI/Context';

function FoodDetails(props) {
  const { history, match: { params: { id } } } = props;

  const [favoriteHeart, setFavoriteHeart] = useState(false);
  const [recomendation, setRecomendation] = useState([]);
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

  const startRecipe = () => {
    console.log('clicou');
    return history.push(`/comidas/${id}/in-progress`);
  };

  const getValuesInObject = (obj, value) => {
    const lista = [];
    Object.keys(obj).forEach((key) => {
      if (key.includes(value) && obj[key] !== '' && obj[key] !== null) {
        lista.push(obj[key]);
      }
    });
    return lista;
  };

  if (item.length === 0) return (<Loading />);
  const { strMeal, strMealThumb, strCategory, strInstructions, strYoutube } = item[0];

  const ingredients = getValuesInObject(item[0], 'strIngredient');
  const ingredientsMeansure = getValuesInObject(item[0], 'strMeasure');
  const link = (strYoutube.split(/v=/i));

  return (
    <div>
      <div className="Image-Meal">
        <img width="200px" data-testid="recipe-photo" src={ strMealThumb } alt="recipe" />
      </div>
      <div className="info-share-favorites">
        <div className="info">
          <h1 data-testid="recipe-title" className="title">
            {strMeal}
          </h1>
          <h2 data-testid="recipe-category" className="category">
            {strCategory}
          </h2>
        </div>
      </div>
      <div className="options">
        <ShareButton />
        <FavoriteButton
          favoriteHeartState={ favoriteHeart }
          setFavoriteHeart={ setFavoriteHeart }
        />
      </div>
      <div className="ingredients">
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
              <span>{ingredient}</span>
              <span>{ingredientsMeansure[index]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <p data-testid="instructions">
          {strInstructions}
        </p>
      </div>
      <div className="video">
        <iframe data-testid="video" width="748" height="421" src={ `https://www.youtube.com/embed/${link[1]}` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <h3>Recomendadas</h3>
      <CarrouselRecomendations recomendation={ recomendation } drink />
      <div>
        <button
          type="button"
          style={ { position: 'fixed', bottom: '0' } }
          onClick={ () => startRecipe() }
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </div>
    </div>
  );
}

FoodDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodDetails;
