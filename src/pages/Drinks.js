import React, { useState, useEffect } from 'react';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';
import MiniCard from '../components/MiniCard';

function Drinks() {
  const [listItem, setListItem] = useState([]);
  const page = '/bebidas';
  const MAX_INDEX = 12;

  useEffect(() => {
    const foodFetch = async () => {
      const base = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(base);
      const data = await request.json();
      setListItem(data.drinks.slice(0, MAX_INDEX));
    };
    foodFetch();
  }, []);

  if (listItem.length === 0) return null;
  return (
    <div>
      <HeaderSearch word="Bebidas" />
      <div>
        {listItem.map((item, i) => (
          <MiniCard key={ i } args={ { i, ...item, page } } />))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
