import React from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import Footer from '../components/Footer';

const { email } = JSON.parse(localStorage.getItem('user'));
function Profile() {
  return (
    <div>
      <HeaderNoSearch word="Perfil" />
      <div>
        <h3 data-testid="profile-email">{ email }</h3>
        <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
        <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
        <button type="button" data-testid="profile-logout-btn">Sair</button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
