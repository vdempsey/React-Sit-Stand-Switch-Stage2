import React from 'react';
import BannerTwo from './BannerTwo';
import RegisterForm from './RegisterForm';
import Header from './Header';
import Menu from './Menu';
import UserProfileData from './UserProfileData';
import PropTypes from 'prop-types';
import { Link } from 'react-router';



function Register(){
  return (
    <div>
      <Header/>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <RegisterForm />
    </div>
  );
}


export default Register;
