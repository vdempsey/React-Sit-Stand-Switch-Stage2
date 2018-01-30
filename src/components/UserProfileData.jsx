import React from 'react';
import RegisterForm from 'react';
import PropTypes from 'prop-types';

function UserProfileData(props) {
  console.log(props);
  return (
    <div>
      <div>My name is {props.name}</div>
    </div>
  );
}

UserProfileData.propTypes = {
  name: PropTypes.string,
};

export default UserProfileData;
