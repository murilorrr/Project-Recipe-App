import PropTypes from 'prop-types';
import React from 'react';

function Input({ name, type, onChange, value }) {
  const testId = `${name}-input`;
  return (
    <label
      htmlFor="email"
    >
      { name }
      <input
        type={ type }
        name={ name }
        id={ testId }
        data-testid={ testId }
        value={ value }
        onChange={ onChange }
        required
      />
    </label>);
}

Input.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Input;
