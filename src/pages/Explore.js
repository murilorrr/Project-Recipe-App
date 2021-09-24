import PropTypes from 'prop-types';
import React from 'react';
import Input from '../components/buttons';
import HeaderNoSearch from '../components/HeaderNoSearch';

function Explorar(props) {
  const { history } = props;
  const changeRoute = (foodOrDrink) => {
    history.push(`/explorar/${foodOrDrink}`);
  };

  return (
    <div>
      <HeaderNoSearch word="Explorar" />
      <Input
        name="drinks"
        type="button"
        onClick={ changeRoute }
      />
      <Input
        name="food"
        type="button"
        onClick={ changeRoute }
      />
    </div>
  );
}

Explorar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Explorar;
