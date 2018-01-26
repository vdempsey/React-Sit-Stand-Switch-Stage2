import React from 'react';
import LogIn from './LogIn';
import Register from './Register';
import Error404 from './Error404';
import { Link } from 'react-router';


function Header(){
  return (
    <div>
      <div>
        <div>
          <Link to='/'>HOME</Link>
          <Link to='/Register'>BLOG</Link>
          <Link to='/Contact'>CONTACT</Link>
        </div>
        <div>
          <Link to='/'><LogIn /></Link>
          <div>
            <Link to='/Register'><button>Register</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
