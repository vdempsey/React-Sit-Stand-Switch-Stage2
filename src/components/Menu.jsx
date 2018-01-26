import React from 'react';
import LogIn from './LogIn';
import Register from './Register';
import { Link } from 'react-router';

function Menu(){
  return (
    <div>
      <div>
        <div><Link to='/'>WHY</Link></div>
        <div><Link to='/Register'>HOW</Link></div>
        <div><Link to='/Register'>REGISTER</Link></div>
      </div>
    </div>
  );
}

export default Menu;
