import React from 'react';
import PropTypes from 'prop-types';

const copy = require('clipboard-copy');

function ShareButton(props) {
  const { location: { pathname } } = props;

  const onclick = () => {
    copy(pathname);
    global.alert('link copiado');
  };
  return (
    <button
      onClick={ onclick }
      data-testid="share-btn"
      type="button"
    >
      Share
    </button>
  );
}

ShareButton.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default ShareButton;
