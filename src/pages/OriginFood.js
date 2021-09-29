import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { generatePath } from 'react-router';
import Context from '../contextAPI/Context';
import HeaderDrink from '../components/HeaderSearch';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';

function OriginFood() {
  const history = useHistory();
  const { listItem, setListItem } = useContext(Context);

  const [byArea, setByArea] = useState([]);
  const [selectArea, setSelectArea] = useState('');
  const [byAreaResults, setByAreaResults] = useState([]);
  const MAX_INDEX = 12;

  const AllFetch = async () => {
    const base = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(base);
    const data = await response.json();
    setByAreaResults(data.meals.slice(0, MAX_INDEX));
  }

  useEffect(() => {
    const fectIngred = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const result = await request.json();
      setByArea(result.meals);

      await AllFetch()
    };
    fectIngred();
  }, []);

  useEffect(() => {
      const fectIngredSearch = async () => {
        if (selectArea === 'All') return AllFetch(listItem)

        const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectArea}`);
        const result = await request.json();
        if(result.meals) {
          setByAreaResults(result.meals.splice(1, MAX_INDEX));
        } else { setByAreaResults([]) }
      };
   
      fectIngredSearch()
  }, [selectArea]);

  const onClick = ({ target: {value}}) => {
    setSelectArea(value)
  }

  const changeRoute = (id) => {
    const path = generatePath(`/comidas/:id`, { id: id });
    history.replace(path)
  }

  return (
    <div>
      <HeaderDrink word="Explorar Origem" />
      <select data-testid="explore-by-area-dropdown" onClick={ (e) => onClick(e) }>
        <option data-testid={`All-option`}>
          All
        </option>
        {byArea
          .map((obj) => (
            <option data-testid={`${obj.strArea}-option`}>
              {obj.strArea}
            </option>))}
      </select>
      <main>
        { byAreaResults.map((obj, index) => (
          <IngredientsCard
            id={obj.idMeal}
            name={obj.strMeal}
            img={obj.strMealThumb}
            onClick={ changeRoute }
            index={ index }
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default OriginFood;
