import React from 'react';
import PropTypes from 'prop-types';

function StartRecipe(props) {
  const { history, id } = props;
  const startRecipe = () => {
    console.log('clicou');
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
