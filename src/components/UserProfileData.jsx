import React from 'react';
import NewRegisterForm from 'react';
import PropTypes from 'prop-types';

function UserProfileData(props) {
  return (
    <div>
      <div>{props.login}</div>
    </div>
  );
}

UserProfileData.propTypes = {
  login: PropTypes.string.isRequired,
};

export default UserProfileData;
