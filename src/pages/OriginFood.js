import React, { useEffect, useState } from 'react';
import HeaderDrink from '../components/HeaderSearch';
import Footer from '../components/Footer';

function OriginFood() {
  const [byArea, setByArea] = useState();
  const [selectArea, setSelectArea] = useState('list');
  const [byAreaResults, setByAreaResults] = useState();
  const MAX_INDEX = 12;

  useEffect(() => {
    const fectIngred = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const result = await request.json();
      setByArea(result.meals);
    };
    fectIngred();
  }, []);

  useEffect(() => {
    const fectIngredSearch = async () => {
      const request = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${selectArea}`);
      const result = await request.json();
      console.log(result);
      return setByAreaResults(result);
    };

    fectIngredSearch();
  }, [selectArea]);

  const onClick = ({ target: { value } }) => {
    setSelectArea(value);
  };
  return (
    <div>
      <HeaderDrink word="Explorar Origem" />
      <select data-testid="explore-by-area-dropdown" onClick={ (e) => onClick(e) }>
        { byArea ? byArea
          .map((obj) => (
            <option data-testid="${area}-option">
              {obj.strArea}
            </option>)) : null}
      </select>
      <Footer />
    </div>
  );
}

export default OriginFood;
