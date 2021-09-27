import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router';
import shareicon from '../images/shareIcon.svg';

function ShareIcon({ dataTestid, pathname }) {
  const [feedback, setFeedback] = useState(false);
  console.log(useHistory());

  const onclick = () => {
    setFeedback(true);
    const timeout = 300;
    copy(`http://localhost:3000${pathname}`);
    setTimeout(() => setFeedback(false), timeout);
  };
  return (
    <div>
      <button type="button" onClick={ () => onclick() }>
        <img
          data-testid={ dataTestid }
          className="card-recipes-made-share"
          src={ shareicon }
          alt="Icone de compartilhar"
        />
      </button>
      {feedback ? <div>Link copiado!</div> : null}
    </div>
  );
}

ShareIcon.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default ShareIcon;
