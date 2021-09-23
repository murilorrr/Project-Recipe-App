import PropTypes from 'prop-types';
import React from 'react';

function Button({ onClick, disabled }) {
  return (
    <button
      type="button"
      data-testid="login-submit-btn"
      disabled={ disabled }
      onClick={ onClick }
      required
    >
      Entrar

    </button>);
}

Button.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Button;
