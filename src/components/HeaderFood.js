import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function HeaderFood() {
  return (
    <header>
      <div data-testid="profile-top-btn">
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="profile" />
          </button>
        </Link>
      </div>
      <div data-testid="page-title">
        <h2>Comida</h2>
      </div>
      <div data-testid="search-top-btn">
        <button type="button">
          <img src={ searchIcon } alt="searchIcon" />
        </button>
      </div>
    </header>
  );
}

export default HeaderFood;
