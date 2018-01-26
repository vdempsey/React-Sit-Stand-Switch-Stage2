import React from 'react';
import add from '../assets/images/add.png';
import { Link } from 'react-router';

function RegisterForm(){
  return (
    <div className="register-form-container">
      <div>
        <img className="logoSm" src={add} />
        <p>For best results, upload a square photo</p>
      </div>
      <form>
        <div>
          <label>Profile Pic</label>
          <input type="text" placeholder="enter image url"></input>
        </div>
        <div>
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>User Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Your Motto</label>
          <textarea></textarea>
        </div>
        <Link to='/UserProfilePage'><button>REGISTER</button></Link>
      </form>
    </div>
  );
}

export default RegisterForm;
