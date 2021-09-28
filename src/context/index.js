// import React from 'react'

async function Dofatch() {
  const response = (await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=list`)).json());
  console.log(response)
}

export default Dofatch;
