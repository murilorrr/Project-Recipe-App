import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../contextAPI/Context';

function StartRecipe(props) {
  const { history, id, history: { location: { pathname } } } = props;

  const [WasInLocalStorage, SetIfWasInLocalStorage] = useState(false);
  // uso do context com a chave de receitas em progresso predefinida
  const { recipeInProgress, setInProgress } = useContext(Context);

  const startRecipe = async () => {
    // setar um novo recipeInProgress
    // colocar a receita no local Storage na chave InProgressRecipes
    // depende do pathname
    if (pathname.includes('comidas')) {
      await setInProgress({ ...recipeInProgress, ...recipeInProgress.meals[id] = [] });
      localStorage.setItem('inProgressRecipes', JSON
        .stringify(recipeInProgress));
    } else {
      await setInProgress({ ...recipeInProgress,
        ...recipeInProgress.cocktails[id] = [] });
      localStorage.setItem('inProgressRecipes', JSON
        .stringify(recipeInProgress));
    }
    if (pathname.includes('comidas')) return history.push(`/comidas/${id}/in-progress`);
    return history.push(`/bebidas/${id}/in-progress`);
  };

  const continuousRecipe = () => {
    // Apenas encaminha para a pagina correta
    if (pathname.includes('comidas')) return history.push(`/comidas/${id}/in-progress`);
    return history.push(`/bebidas/${id}/in-progress`);
  };

  const style = { position: 'fixed',
    bottom: '0',
    width: '300px',
  };

  useEffect(() => {
    console.log('useeffect');
    const assertLocalStore = () => {
      const RecipesInLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (RecipesInLocal !== null) setInProgress(RecipesInLocal);
      const resultFilter = Object.keys(RecipesInLocal)
        .map((element) => Object.keys(RecipesInLocal[element]).some((el) => el === id));
      resultFilter.forEach((el) => {
        if (el === true) SetIfWasInLocalStorage(true);
      });
    };
    assertLocalStore();
  }, [id, setInProgress]);

  if (WasInLocalStorage) {
    return (
      <div className="StartButton">
        <button
          type="button"
          style={ style }
          onClick={ () => continuousRecipe() }
          data-testid="start-recipe-btn"
        >
          Continuar Receita
        </button>
      </div>
    );
  }

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

// history, id, history: { location: { pathname } } }

StartRecipe.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    push: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default StartRecipe;
