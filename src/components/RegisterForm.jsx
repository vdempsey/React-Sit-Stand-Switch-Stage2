import React from 'react';

function RegisterForm(){
  return (
    <form>
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
      <button>REGISTER</button>
    </form>
  );
}

export default RegisterForm;
