import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import HeaderSearch from '../components/HeaderSearch';
import CategoryButton from '../components/CategoryButton';
import MiniCard from '../components/MiniCard';
import Context from '../contextAPI/Context';

function Drinks() {
  const { push } = useHistory();
  const { listItem, setListItem, baseUrlDrink } = useContext(Context);

  const page = '/bebidas';
  const MAX_INDEX = 12;

  useEffect(() => {
    const foodFetch = async () => {
      const request = await fetch(baseUrlDrink);
      const data = await request.json();
      setListItem(data.drinks.slice(0, MAX_INDEX));
    };
    foodFetch();
  }, [setListItem, baseUrlDrink]);

  if (listItem.length === 0) return null;

  if (listItem.length === 1 && baseUrlDrink !== 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list') {
    const id = listItem[0].idDrink;
    push(`${page}/${id}`);
  }

  return (
    <div>
      <HeaderSearch word="Bebidas" />
      <CategoryButton />
      <div>
        {listItem.map((item, i) => (
          <MiniCard key={ i } args={ { i, ...item, page } } />))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
