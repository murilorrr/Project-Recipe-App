import React from "react";

function HeaderRecipes({strCategory, strMeal, strMealThumb}) {
    return(
      <>
        <div className="Image-Meal">
            <img width="200px" data-testid="recipe-photo" src={ strMealThumb } alt="recipe" />
        </div>
        <div className="info-share-favorites">
            <div className="info">
             <h1 data-testid="recipe-title" className="title">
                {strMeal}
            </h1>
            <h2 data-testid="recipe-category" className="category">
              {strCategory}
            </h2>
            </div>
        </div>
      </>
    )
}

export default HeaderRecipes;