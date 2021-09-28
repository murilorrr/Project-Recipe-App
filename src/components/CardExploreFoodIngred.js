import React from 'react';

function CardExploreFoodIngred() {
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img src="" alt="" data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ name }</p>

    </div>
  );
}

export default CardExploreFoodIngred;
