import React from 'react';

export default function SearchBarHeader() {
  return (
    <>
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          id="ingredient-search-radio"
          name="radio"
          data-testid="ingredient-search-radio"
          value="ingredient-search-radio"
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
        />
        Primeira letra
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </>
  );
}
