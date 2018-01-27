import React from 'react';
import add from '../assets/images/add.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function RegisterForm({ url, name, username, password, motto, onNewUser }){
  let _url, _name, _username, _password, _motto;

  const submit = (e) => {
    e.preventDefault();
    onNewUser({
      url: _url.value,
      name: _name.value,
      username: _username.value,
      password: _password.value,
      motto: _motto.value
    });
    _url.value = '';
    _name.value = '';
    _username.value = '';
    _password.value = '';
    _motto.value = '';
  };

  return (
    <div className="register-form-container">
      <div>
        <img className="logoSm" src={add} />
        <p>For best results, upload a square photo</p>
      </div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="url">Profile Pic</label>
          <input type="text" required defaultValue={url} ref={input => _url = input}/>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input required defaultValue={name} ref={input => _name = input}/>
        </div>
        <div>
          <label htmlFor="username">User Name</label>
          <input required defaultValue={username} ref={input => _username = input}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input required defaultValue={password} ref={input => _password = input}/>
        </div>
        <div>
          <label htmlFor="motto">Your Motto</label>
          <input required defaultValue={motto} ref={input => _motto = input}/>
        </div>
        <Link to='/UserProfilePage'><button onClick={ this.saveAndContinue }>REGISTER</button></Link>
      </form>
    </div>
  );
}



RegisterForm.defaultProps = {
  url: 'https://tinyurl.com/y89cde7o',
  name: 'Jebra',
  username: 'Jo-Jo',
  password: 'password',
  motto: 'I like to move it move it'
};


RegisterForm.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  motto: PropTypes.string.isRequired,
};

export default RegisterForm;
