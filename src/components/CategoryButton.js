import React, { useEffect } from 'react';

// const MAX_LENGHT = 6;

function CategoryButton() {

  useEffect(() => {
    const fetchApi = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      
    }
  })

  return (
    <button type="button" data-testid=''>
      Teste.
    </button>
  );
}

export default CategoryButton;
