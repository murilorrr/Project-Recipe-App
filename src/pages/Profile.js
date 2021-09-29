import React from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import Footer from '../components/Footer';

const { email } = JSON.parse(localStorage.getItem('user'));
function Profile() {
  return (
    <div>
      <HeaderNoSearch word="Perfil" />
      <h3>{ email }</h3>
      <Footer />
    </div>
  );
}

export default Profile;
