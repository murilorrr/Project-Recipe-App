import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const optionsDefault = {
  checkRadio: '',
  input: 'ga',
  pageName: '',
  themealdb: '',
  thecocktaildb: '',
};

// Fetch para as comidas
// Vefirica qual radio foi selecionado e criar endpoint correto usando o input digitado.
const themealdbFetch = async (checkRadio, input, options, setOptions) => {
  const themealdbEndPoint = {
    ingredient_search: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`,
    name_search: `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`,
    first_letter_search: `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`,
  };

  const themealdb = (await (await fetch(themealdbEndPoint[checkRadio])).json());
  setOptions({ ...options, themealdb });
  console.log(themealdb);
  return themealdb;
};

// Fetch para as Bebidas
// Vefirica qual radio foi selecionado e criar endpoint correto usando o input digitado.
const thecocktaildbFetch = async (checkRadio, input, options, setOptions) => {
  const themealdbEndPoint = {
    ingredient_search: `https:/www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`,
    name_search: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`,
    first_letter_search: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`,
  };

  const thecocktaildb = (await (await fetch(themealdbEndPoint[checkRadio])).json());
  await setOptions({ ...options, thecocktaildb });
  return thecocktaildb;
};

export default function SearchBarHeader() {
  // Pega a Url e assim sei qual e a pagina que estou.
  const pageName = useHistory().location.pathname;

  const [options, setOptions] = useState({ ...optionsDefault, pageName });

  const handleClick = () => {
    const { checkRadio, input } = options;

    if (input.length > 1 && checkRadio === 'first_letter_search') return alert('error');

    if (pageName === '/comidas') {
      return themealdbFetch(checkRadio, input, options, setOptions);
    }

    if (pageName === '/bebidas') {
      return thecocktaildbFetch(checkRadio, input, options, setOptions);
    }
  };

  return (
    <>
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          id="ingredient-search-radio"
          name="radio"
          data-testid="ingredient-search-radio"
          value="ingredient_search"
          onChange={ (e) => setOptions({ ...options, checkRadio: e.target.value }) }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          id="name-search-radio"
          name="radio"
          data-testid="name-search-radio"
          value="name_search"
          onChange={ (e) => setOptions({ ...options, checkRadio: e.target.value }) }

        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          id="first-letter-search-radio"
          name="radio"
          data-testid="first-letter-search-radio"
          value="first_letter_search"
          onChange={ (e) => setOptions({ ...options, checkRadio: e.target.value }) }
        />
        Primeira letra
      </label>
      <button type="button" data-testid="exec-search-btn" onClick={ handleClick }>
        Buscar
      </button>
    </>
  );
}
