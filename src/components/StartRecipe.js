import React from 'react';
import PropTypes from 'prop-types';

function StartRecipe(props) {
  const { history, id, history: { location: { pathname } } } = props;
  const startRecipe = () => {
    console.log('clicou');
    if (pathname.includes('comidas')) return history.push(`/comidas/${id}/in-progress`);
    return history.push(`/bebidas/${id}/in-progress`);
  };

  const style = { position: 'fixed',
    bottom: '0',
    width: '300px' };

  return (
    <div className="StartButton">
      <button
        type="button"
        style={ style }
        onClick={ () => startRecipe() }
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
  );
}

StartRecipe.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default StartRecipe;
