/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
// import Context from '../contextAPI/Context';

function ComidasDetails(props) {
  const recipe = {
    meals: [
      {
        idMeal: '52882',
        strMeal: 'Three Fish Pie',
        strDrinkAlternate: null,
        strCategory: 'Seafood',
        strArea: 'British',
        strInstructions: 'Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.',
        strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg',
        strTags: 'Fish,Seafood,Dairy,Pie',
        strYoutube: 'https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8',
        strIngredient1: 'Potatoes',
        strIngredient2: 'Butter',
        strIngredient3: 'Milk',
        strIngredient4: 'Gruy\u00e8re',
        strIngredient5: 'Butter',
        strIngredient6: 'Leek',
        strIngredient7: 'Plain Flour',
        strIngredient8: 'White Wine',
        strIngredient9: 'Milk',
        strIngredient10: 'Parsley',
        strIngredient11: 'Salmon',
        strIngredient12: 'Haddock',
        strIngredient13: 'Smoked Haddock',
        strIngredient14: 'Eggs',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '1kg',
        strMeasure2: 'Knob',
        strMeasure3: 'Dash',
        strMeasure4: '50g',
        strMeasure5: '75g',
        strMeasure6: '2 sliced',
        strMeasure7: '75g',
        strMeasure8: '150ml',
        strMeasure9: '568ml',
        strMeasure10: '2 tbs chopped',
        strMeasure11: '250g',
        strMeasure12: '250g',
        strMeasure13: '250g',
        strMeasure14: '6',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strSource: 'https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875',
        dateModified: null,
      },
    ],
  };
  const { meals } = recipe;
  const { history } = props;

  // const requestAPI = useContext(Context);

  const link = meals[0].strYoutube.split(/v=/i);
  const [favoriteHeart, setFavoriteHeart] = useState(false);

  // useEffect(() => {
  //   (requestAPI(1));
  // }, [requestAPI]);

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
  const ingredients = getValuesInObject(meals[0], 'strIngredient');
  console.log(ingredients);
  const ingredientsMeansure = getValuesInObject(meals[0], 'strMeasure');

  return (
    <div>
      <div className="Image-Meal">
        <img data-testid="recipe-photo" src={ meals[0].strMealThumb } alt="recipe" />
      </div>
      <div className="info-share-favorites">
        <div className="info">
          <h1 data-testid="recipe-title" className="title">
            {meals[0].strMeal}
          </h1>
          <h2 data-testid="recipe-category" className="category">
            {meals[0].strCategory}
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
          {meals[0].strInstructions}
        </p>
      </div>
      <div className="video">
        <iframe width="748" height="421" src={ `https://www.youtube.com/embed/${link[1]}` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div style={ { minHeight: '400px' } } className="carousel-recomentations">
        <h3>Recomendadas</h3>
        {/* {
          meals[0].recomendation
            .map((card) => (
              <FoodCard
                key={ card }
                data-testid={ `${card}-recomendation-card` }
                id={ card }
              />))
        } */}
      </div>
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
  }).isRequired,
};

export default ComidasDetails;
