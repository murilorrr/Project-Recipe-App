import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import MiniCard from './MiniCard';

const optionsDefault = {
  checkRadio: '',
  input: 'Lasagne',
  pageName: '',
  listThecocktailOrThemeal: [],
};

const MAX_INDEX = 12;

// Fetch para as comidas
// Vefirica qual radio foi selecionado e criar endpoint correto usando o input digitado.
const themealdbFetch = async (checkRadio, input, options, setOptions) => {
  const themealdbEndPoint = {
    ingredient_search: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`,
    name_search: `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`,
    first_letter_search: `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`,
  };

  const themealdb = (await (await fetch(themealdbEndPoint[checkRadio])).json());
  // se themealdb for null retorna lista [].
  setOptions(
    { ...options,
      listThecocktailOrThemeal:
      themealdb.meals ? themealdb.meals.slice(0, MAX_INDEX) : [] },
  );

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
  await setOptions(
    { ...options,
      listThecocktailOrThemeal:
      thecocktaildb.meals ? thecocktaildb.meals.slice(0, MAX_INDEX) : [] },
  );
  return thecocktaildb;
};

export default function SearchBarHeader() {
  // Pega a Url e assim sei qual e a pagina que estou.
  const pageName = useHistory().location.pathname;

  const [options, setOptions] = useState({ ...optionsDefault, pageName });

  const handleClick = () => {
    const { checkRadio, input } = options;
    if (input.length > 1 && checkRadio === 'first_letter_search') {
      return global.alert('Digite Apenas uma Lentra!!!');
    }

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
      {options.listThecocktailOrThemeal.length === 1
        ? <Redirect to={ `/${options.listThecocktailOrThemeal[0].idMeal}` } />
        : options.listThecocktailOrThemeal.map(
          (item, index) => (<MiniCard
            key={ index }
            args={ { ...item, index, pageName } }
          />),
        )}
    </>
  );
}
