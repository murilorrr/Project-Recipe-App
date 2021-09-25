export function saveToken(tokenName, key = 1) {
  localStorage.setItem(tokenName, key);
}

export function saveEmail(email) {
  const emailOBJ = { email };
  localStorage.setItem('user', JSON.stringify(emailOBJ));
}

export function initialRecipesFavorites() {
  const FavoriteRecipes = '[]';
  localStorage.setItem('favoriteRecipes', JSON.stringify(FavoriteRecipes));
}
