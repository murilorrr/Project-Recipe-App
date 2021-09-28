import React, { useEffect, useState } from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import Footer from '../components/Footer';
import { CardExploreFoodDrinkIngred } from '../components';

const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const MAX_INDEX = 12;
function ExploreFoodIngred() {
  const [listIngred, setlistIngred] = useState();

  useEffect(() => {
    const fectIngred = async () => {
      const request = await fetch(URL);
      const result = await request.json();
      setlistIngred(result.meals.slice(0, MAX_INDEX));
    };
    fectIngred();
  }, []);

  if (!listIngred) return null;

  return (
    <div>
      <HeaderNoSearch word="Explorar Ingredientes" />
      {listIngred.map((item, index) => (<CardExploreFoodDrinkIngred
        key={ index }
        index={ index }
        Ingredient={ item.strIngredient }
      />))}
      <Footer />
    </div>
  );
}

export default ExploreFoodIngred;
