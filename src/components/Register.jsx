import React from 'react';
import BannerTwo from './BannerTwo';
import RegisterForm from './RegisterForm';
import Menu from './Menu';


function Register(){
  return (
    <div>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <RegisterForm />
    </div>
  );
}

export default Register;
