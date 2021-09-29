import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { generatePath } from 'react-router';
import HeaderDrink from '../components/HeaderSearch';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';

function OriginFood() {
  const history = useHistory();

  const [byArea, setByArea] = useState([]);
  const [selectArea, setSelectArea] = useState('');
  const [byAreaResults, setByAreaResults] = useState([]);
  const MAX_INDEX = 12;

  const AllFetch = async () => {
    const base = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(base);
    const data = await response.json();
    setByAreaResults(data.meals.slice(0, MAX_INDEX));
  };

  useEffect(() => {
    const fectIngred = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const result = await request.json();
      setByArea(result.meals);

      await AllFetch();
    };
    fectIngred();
  }, []);

  useEffect(() => {
    const fectIngredSearch = async () => {
      setByAreaResults([]);
      if (selectArea === 'All') return AllFetch();

      const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectArea}`);
      const result = await request.json();
      if (!result.meals.legth) {
        setByAreaResults(result.meals.splice(1, MAX_INDEX));
      } else { setByAreaResults([]); }
    };

    fectIngredSearch();
  }, [selectArea]);

  const onClick = ({ target: { value } }) => {
    setSelectArea(value);
  };

  const changeRoute = (id) => {
    const path = generatePath('/comidas/:id', { id });
    history.replace(path);
  };

  return (
    <div>
      <HeaderDrink word="Explorar Origem" />
      <select data-testid="explore-by-area-dropdown" onClick={ (e) => onClick(e) }>
        <option data-testid="All-option" key="00">
          All
        </option>
        {byArea
          .map((obj, i) => (
            <option data-testid={ `${obj.strArea}-option` } key={ i }>
              {obj.strArea}
            </option>))}
      </select>
      <main>
        { byAreaResults.map((obj, index) => (
          <IngredientsCard
            id={ obj.idMeal }
            name={ obj.strMeal }
            img={ obj.strMealThumb }
            onClick={ changeRoute }
            key={ index }
            index={ index }
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default OriginFood;
