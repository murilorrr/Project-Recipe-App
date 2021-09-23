import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function HeaderSearch(props) {
  const { word } = props;
  const [searchButton, setSearchButton] = useState(false);
  return (
    <header>
      <Link to="/perfil">
        <button type="button">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile"
          />
        </button>
      </Link>
      <h2 data-testid="page-title">{word}</h2>
      <button
        type="submit"
        onClick={ () => setSearchButton(!searchButton) }
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search_Icon"
        />
      </button>
      {
        searchButton
          ? <input data-testid="search-input" type="text" placeholder="digite aqui" />
          : null
      }
    </header>
  );
}

HeaderSearch.propTypes = {
  word: PropTypes.string.isRequired,
};

export default HeaderSearch;
