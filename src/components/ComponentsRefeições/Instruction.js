import React from 'react';
import PropTypes from 'prop-types';

function Instruction({ strInstructions }) {
  return (
    <p data-testid="instructions">
      {strInstructions}
    </p>
  );
}

Instruction.propTypes = {
  strInstructions: PropTypes.string.isRequired,
};

export default Instruction;
