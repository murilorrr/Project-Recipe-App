import React from 'react';
import PropTypes from 'prop-types';

function CarrouselRecomendations(props) {
  const { recomendation: listofObjects } = props;
  return (
    <div style={ { display: 'flex' } } className="carousel-recomentations">
      {
        listofObjects.map(({ strDrinkThumb, strAlcoholic, idDrink, strDrink }, index) => (
          <div
            style={ { borderRadius: '5px', backgroundColor: 'grey', margin: '4px' } }
            key={ strDrink }
            data-testid={ `${index}-recomendation-card` }
            id={ idDrink }
          >
            <img alt={ strDrink } width="80px" src={ strDrinkThumb } />
            <h4>{strAlcoholic}</h4>
            <h3>{strDrink}</h3>
          </div>))
      }
    </div>
  );
}

CarrouselRecomendations.propTypes = {
  recomendation: PropTypes.objectOf().isRequired,
};

export default CarrouselRecomendations;
