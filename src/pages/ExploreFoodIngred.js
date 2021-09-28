import React from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import Footer from '../components/Footer';
import Dofatch from '../context'

function ExploreFoodIngred() {
  Dofatch()
  return (
    <div>
      <HeaderNoSearch word="Explorar Ingredientes" />
      <Footer />
    </div>
  );
}

export default ExploreFoodIngred;
