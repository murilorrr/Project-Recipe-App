/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavoriteButton, CarrouselRecomendations, ShareButton } from '../components';

// import Context from '../contextAPI/Context';

function ComidasDetails(props) {
  const { history: { location: { pathname } }, history, match: { params: { id } } } = props;
  const isFood = pathname.includes('comidas');

  const [recomendation, setRecomendation] = useState([]);
  const [item, setItem] = useState({});

  const link = item.strYoutube.split(/v=/i);
  const [favoriteHeart, setFavoriteHeart] = useState(false);

  const fetchById = async (param, idLocation) => {
    let response;
    if (param) {
      response = (await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idLocation}`)).json()).drinks;
    } else {
      response = (await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idLocation}`)).json()).meals;
    }
    setItem(response);
  };

  const fetchFoodOrDrinkRecomendations = async (param) => {
    let response;
    if (param) {
      response = (await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json()).drinks;
    } else {
      response = (await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json()).meals;
    }
    setRecomendation(response);
  };

  useEffect(() => {
    fetchById(isFood, id);
    fetchFoodOrDrinkRecomendations(isFood);
  }, [isFood, id]);

  const startRecipe = () => {
    console.log('clicou');
    return history.push('/comidas/1/progress');
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
  const ingredients = getValuesInObject(item, 'strIngredient');
  const ingredientsMeansure = getValuesInObject(item, 'strMeasure');

  return (
    <div>
      <div className="Image-Meal">
        {/* <img data-testid="recipe-photo" src={ item.strMealThumb } alt="recipe" /> REFATORAR PARA DRINK */}
      </div>
      <div className="info-share-favorites">
        <div className="info">
          <h1 data-testid="recipe-title" className="title">
            {/* {item.strMeal}REFATORAR PARA DRINK */}
          </h1>
          <h2 data-testid="recipe-category" className="category">
            {item.strCategory}
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
            <li key={ ingredient } data-testid="">
              <span>{ingredient}</span>
              <span>{ingredientsMeansure[index]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <p data-testid="instructions">
          {item.strInstructions}
        </p>
      </div>
      <div className="video">
        <iframe width="748" height="421" src={ `https://www.youtube.com/embed/${link[1]}` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <h3>Recomendadas</h3>
      <CarrouselRecomendations recomendation={ recomendation } />
      <div>
        <button
          type="button"
          onClick={ () => startRecipe() }
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </div>
    </div>
  );
}

ComidasDetails.propTypes = {
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

export default ComidasDetails;
