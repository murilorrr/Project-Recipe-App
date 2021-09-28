import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareicon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton(props) {
  const { location: { pathname } } = props;
  const [feedback, setFeedback] = useState(false);

  const onclick = () => {
    copy(`http://localhost:3000${pathname}`);
    setFeedback(!feedback);
    const timeout = 1000;
    setTimeout(() => setFeedback(false), timeout);
  };
  return (
    <>
      <button
        onClick={ onclick }
        data-testid="share-btn"
        type="button"
      >
        <img
          src={ shareicon }
          alt="Icone de compartilhar"
        />
      </button>
      {feedback ? <div>Link copiado!</div> : null}
    </>

  );
}

ShareButton.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default ShareButton;
