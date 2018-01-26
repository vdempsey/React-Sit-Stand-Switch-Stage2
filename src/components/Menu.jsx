import React from 'react';
import LogIn from './LogIn';
import Register from './Register';
import { Link } from 'react-router';
import MenuLink from './MenuLink';

function Menu(){
  return (
    <div className="menu-container-wrap">
      <div className="menu-container">
        <MenuLink to='/' className="menu-link">WHY</MenuLink>
        <MenuLink to='/Contact' className="menu-link">HOW</MenuLink>
        <MenuLink to='/Register' className="menu-link">REGISTER</MenuLink>
      </div>
    </div>
  );
}

export default Menu;
