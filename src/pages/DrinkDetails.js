/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavoriteButton, CarrouselRecomendations, ShareButton, Loading, StartRecipe } from '../components';

// import Context from '../contextAPI/Context';

function DrinkDetails(props) {
  const { match: { params: { id } }, location, history } = props;

  const [favoriteHeart, setFavoriteHeart] = useState(false);
  const [recomendation, setRecomendation] = useState([]);
  const [item, setItem] = useState([]);

  const fetchById = async (idLocation) => {
    const response = (await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idLocation}`)).json()).drinks;
    setItem(response);
  };

  const fetchFoodOrDrinkRecomendations = async () => {
    const response = (await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json()).meals;
    setRecomendation(response);
  };

  useEffect(() => {
    const fetchAndSet = async () => {
      await fetchById(id);
      await fetchFoodOrDrinkRecomendations();
    };
    fetchAndSet();
  }, [id]);

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
  const { strAlcoholic, strDrinkThumb, strDrink, strInstructions } = item[0];

  const ingredients = getValuesInObject(item[0], 'strIngredient');
  const ingredientsMeansure = getValuesInObject(item[0], 'strMeasure');

  return (
    <div>
      <div className="Image-Meal">
        <img width="200px" data-testid="recipe-photo" src={ strDrinkThumb } alt="recipe" />
      </div>
      <div className="info-share-favorites">
        <div className="info">
          <h1 data-testid="recipe-title" className="title">
            {strDrink}
          </h1>
          <h2 data-testid="recipe-category" className="category">
            {strAlcoholic}
          </h2>
        </div>
      </div>
      <div className="options">
        <ShareButton location={ location } />
        <FavoriteButton
          favoriteHeartState={ favoriteHeart }
          setFavoriteHeart={ setFavoriteHeart }
        />
      </div>
      <div className="ingredients">
        <ul>
          {ingredients.map((ingredient, index) => (
            <li
              key={ ingredient }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
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
      <h3>Recomendados</h3>
      <CarrouselRecomendations recomendation={ recomendation } />
      <StartRecipe id={ id } history={ history } />
    </div>
  );
}

DrinkDetails.propTypes = {
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

export default DrinkDetails;
