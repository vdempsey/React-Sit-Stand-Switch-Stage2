import React from 'react';
import BannerTwo from './BannerTwo';
import RegisterFormA from './RegisterFormA';
import Header from './Header';
import Menu from './Menu';



function Register(){
  return (
    <div>
      <Header/>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <RegisterFormA />
    </div>
  );
}

export default Register;
