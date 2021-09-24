import React, { useState, useEffect } from 'react';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';
import MiniCard from '../components/MiniCard';

function Foods() {
  const [listItem, setListItem] = useState([]);
  const page = '/comidas';
  const MAX_INDEX = 12;

  useEffect(() => {
    const foodFetch = async () => {
      const base = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(base);
      const data = await request.json();
      setListItem(data.meals.slice(0, MAX_INDEX));
    };
    foodFetch();
  }, []);

  if (listItem.length === 0) return null;
  return (
    <div>
      <HeaderSearch word="Comidas" />
      <div>
        {listItem.map((item, i) => (
          <MiniCard key={ i } args={ { i, ...item, page } } />))}
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
