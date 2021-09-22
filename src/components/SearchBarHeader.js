import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const optionsDefault = {
  checkRadio: '',
  input: 'valor',
  pageName: '',
};

export default function SearchBarHeader() {
  // Pega a Url e assim sei qual e a pagina que estou.
  const pageName = useHistory().location.pathname;

  const [options, setoptions] = useState({ ...optionsDefault, pageName });

  const handleClick = () => {
    const { checkRadio, input } = options;
    console.log(checkRadio, input, pageName);
  };

  return (
    <>
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          id="ingredient-search-radio"
          name="radio"
          data-testid="ingredient-search-radio"
          value="ingredient-search-radio"
          onChange={ (e) => setoptions({ ...options, checkRadio: e.target.value }) }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          id="name-search-radio"
          name="radio"
          data-testid="name-search-radio"
          value="name-search-radio"
          onChange={ (e) => setoptions({ ...options, checkRadio: e.target.value }) }

        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          id="first-letter-search-radio"
          name="radio"
          data-testid="first-letter-search-radio"
          value="first-letter-search-radio"
          onChange={ (e) => setoptions({ ...options, checkRadio: e.target.value }) }
        />
        Primeira letra
      </label>
      <button type="button" data-testid="exec-search-btn" onClick={ handleClick }>
        Buscar
      </button>
    </>
  );
}
