import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import HeaderSearch from '../components/HeaderSearch';
import MiniCard from '../components/MiniCard';
import Context from '../contextAPI/Context';

function Drinks() {
  const { push } = useHistory();
  const { listItem, setListItem } = useContext(Context);

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
  }, [setListItem]);
  if (listItem.length === 1) {
    const id = listItem[0].idDrink;
    push(`${page}/${id}`);
  }

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
