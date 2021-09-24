import React from 'react';
import PropTypes from 'prop-types';

function CarrouselRecomendations(props) {
  const { recomendation: listofObjects } = props;
  const maxLength = 6;
  if (listofObjects.strDrinkThumb) {
    return (
      <div style={ { display: 'flex' } } className="carousel-recomentations">
        {
          listofObjects.map(({
            strDrinkThumb, strAlcoholic, idDrink, strDrink }, index) => (
            index < maxLength ? (
              <div
                style={ { borderRadius: '5px', backgroundColor: 'grey', margin: '4px' } }
                key={ strDrink }
                data-testid={ `${index}-recomendation-card` }
                id={ idDrink }
              >
                <img alt={ strDrink } width="100px" src={ strDrinkThumb } />
                <h4>{strAlcoholic}</h4>
                <h3 data-testid={ `${index}-recomendation-title` }>{strDrink}</h3>
              </div>
            ) : null
          ))
        }
      </div>
    );
  }
  return (
    <div style={ { display: 'flex' } } className="carousel-recomentations">
      {
        listofObjects.map(({
          strMeal, strMealThumb, strCategory, idMeal }, index) => (
          index < maxLength ? (
            <div
              style={ { borderRadius: '5px', backgroundColor: 'grey', margin: '4px' } }
              key={ strMeal }
              data-testid={ `${index}-recomendation-card` }
              id={ idMeal }
            >
              <img alt={ strMeal } width="100px" src={ strMealThumb } />
              <h4>{strCategory}</h4>
              <h3>{strMeal}</h3>
            </div>
          ) : null
        ))
      }
    </div>
  );
}

CarrouselRecomendations.propTypes = {
  recomendation: PropTypes.objectOf().isRequired,
};

export default CarrouselRecomendations;
