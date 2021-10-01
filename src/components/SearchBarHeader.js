import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../contextAPI/Context';

// Fetch para as comidas
// Vefirica qual radio foi selecionado e criar endpoint correto usando o input digitado.
const themealdbFetch = (checkRadio, input, setBaseUrlFood) => {
  const themealdbEndPoint = {
    ingredient_search: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`,
    name_search: `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`,
    first_letter_search: `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`,
  };
  setBaseUrlFood(themealdbEndPoint[checkRadio]);

  // if (!themealdb.meals) {
  //   global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  // }
};

// Fetch para as Bebidas
// Vefirica qual radio foi selecionado e criar endpoint correto usando o input digitado.
const thecocktaildbFetch = async (checkRadio, input, setBaseUrlDrink) => {
  const themealdbEndPoint = {
    ingredient_search: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`,
    name_search: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`,
    first_letter_search: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`,
  };

  setBaseUrlDrink(themealdbEndPoint[checkRadio]);

  // return global.alert(
  //   'Sinto muito, não encontramos nenhuma receita para esses filtros.',
  // );
};

export default function SearchBarHeader() {
  const [options, setOptions] = useState();
  // Pega a Url e assim sei qual e a pagina que estou.
  const { pathname } = useLocation();
  console.log(pathname);
  const { setBaseUrlFood, setBaseUrlDrink } = useContext(Context);

  const handleClick = () => {
    const { checkRadio } = options;
    const input = document.getElementById('search-input').value;

    if (pathname === '/comidas') {
      return themealdbFetch(checkRadio, input, setBaseUrlFood);
    }

    if (pathname === '/bebidas') {
      return thecocktaildbFetch(checkRadio, input, setBaseUrlDrink);
    }
  };

  return (
    <>
      <div>
        <input
          data-testid="search-input"
          id="search-input"
          type="text"
          placeholder="digite aqui"
        />
      </div>
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          id="ingredient-search-radio"
          name="radio"
          data-testid="ingredient-search-radio"
          value="ingredient_search"
          onChange={ (e) => setOptions({ checkRadio: e.target.value }) }
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
