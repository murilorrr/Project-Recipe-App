import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderNoSearch from '../components/HeaderNoSearch';

function ExploreFoodIngred() {
  useEffect(() => {
    async function dofatch() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const data = await response.json();
      console.log(data);
      return data;
    }
    dofatch();
  }, []);

  return (
    <div>
      <HeaderNoSearch word="Explorar Ingredientes" />
      <Footer />
    </div>
  );
}

export default ExploreFoodIngred;
