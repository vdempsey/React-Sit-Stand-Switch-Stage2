import React from 'react';
import add from '../assets/images/add.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { v4 } from 'uuid';

function RegisterForm(props){
  let _url = null;
  let _name = null;
  let _username = null;
  let _password = null;
  let _motto = null;

  function handleRegisterFormSubmission(event) {
    event.preventDefault();
    console.log('Hello');
    console.log(_name.value);
    props.onNewUserCreation({url: _url.value, name: _name.value, username: _username.value, password: _password.value, motto: _motto.value, id: v4()});
    _url.value = '';
    _name.value = '';
    _username.value = '';
    _password.value = '';
    _motto.value = '';
  }


  return (
    <div className="register-form-container">
      <div>
        <img className="logoSm" src={add} />
        <p>For best results, upload a square photo</p>
      </div>
      <form onSubmit={handleRegisterFormSubmission}>
        <div>
          <label htmlFor="url">Profile Pic</label>
          <input id='url' type="text" ref={input => _url = input}/>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input id='name' ref={input => _name = input}/>
        </div>
        <div>
          <label htmlFor="username">User Name</label>
          <input id='username'ref={input => _username = input}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id='name' ref={input => _password = input}/>
        </div>
        <div>
          <label htmlFor="motto">Your Motto</label>
          <input id='name' ref={input => _motto = input}/>
        </div>
        <button type='submit'>REGISTER</button>
      </form>
    </div>
  );
}



RegisterForm.propTypes = {
  onNewUserCreation: PropTypes.func
};

export default RegisterForm;
