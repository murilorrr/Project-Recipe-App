import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

function CarrouselRecomendations(props) {
  const { recomendation: listofObjects, drink } = props;
  const maxLength = 6;
  const history = useHistory();

  const onclick = (id) => {
    if (!drink) {
      return history.push(`/comidas/${id}`);
    }
    return history.push(`/bebidas/${id}`);
  };

  if (drink) {
    return (
      <div
        style={ { display: 'flex',
          overflowX: 'scroll' } }
        className="carousel-recomentations"
      >
        {
          listofObjects.map(({
            strDrinkThumb, strAlcoholic, idDrink, strDrink }, index) => (
            index < maxLength ? (
              <div
                onClick={ () => onclick(idDrink) }
                aria-hidden="true"
                style={ {
                  borderRadius: '5px',
                  backgroundColor: 'grey',
                  margin: '4px',
                  minWidth: '50vw' } }
                key={ index }
                data-testid={ `${index}-recomendation-card` }
                id={ idDrink }
              >
                {idDrink}
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
    <div
      style={ { display: 'flex',
        overflowX: 'scroll' } }
      className="carousel-recomentations"
    >
      {
        listofObjects.map(({
          strMeal, strMealThumb, strCategory, idMeal }, index) => (
          index < maxLength ? (
            <div
              onClick={ () => onclick(idMeal) }
              aria-hidden="true"
              style={ {
                borderRadius: '5px',
                backgroundColor: 'grey',
                margin: '4px',
                minWidth: '50%' } }
              key={ strMeal }
              data-testid={ `${index}-recomendation-card` }
              id={ idMeal }
            >
              {idMeal}
              <img alt={ strMeal } width="100px" src={ strMealThumb } />
              <h4>{strCategory}</h4>
              <h3 data-testid={ `${index}-recomendation-title` }>{strMeal}</h3>
            </div>
          ) : null
        ))
      }
    </div>
  );
}

CarrouselRecomendations.propTypes = {
  recomendation: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  drink: PropTypes.bool,
};

CarrouselRecomendations.defaultProps = {
  drink: false,
};

export default CarrouselRecomendations;
