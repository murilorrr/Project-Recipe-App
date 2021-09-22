import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const optionsDefault = {
  checkRadio: '',
  input: 'g',
  pageName: '',
};

// Fetch para as comidas
// Vefirica qual radio foi selecionado e criar endpoint correto usando o input digitado.
const themealdbFetch = async (checkRadio, input) => {
  const themealdbEndPoint = {
    ingredient_search: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`,
    name_search: `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`,
    first_letter_search: `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`,
  };

  const themealdb = (await (await fetch(themealdbEndPoint[checkRadio])).json());
  console.table(themealdb);
  return themealdbEndPoint;
};

// Fetch para as Bebidas
// Vefirica qual radio foi selecionado e criar endpoint correto usando o input digitado.
const thecocktaildbFetch = async (checkRadio, input) => {
  const themealdbEndPoint = {
    ingredient_search: `https:/www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`,
    name_search: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`,
    first_letter_search: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`,
  };

  const thecocktaildb = (await (await fetch(themealdbEndPoint[checkRadio])).json());
  console.table(thecocktaildb);
  return themealdbEndPoint;
};

export default function SearchBarHeader() {
  // Pega a Url e assim sei qual e a pagina que estou.
  const pageName = useHistory().location.pathname;

  const [options, setOptions] = useState({ ...optionsDefault, pageName });

  const handleClick = () => {
    const { checkRadio, input } = options;

    // logica para escolhe a fetch correta
    themealdbFetch(checkRadio, input);
    thecocktaildbFetch(checkRadio, input);
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
