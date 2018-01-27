import React from 'react';
import PropTypes from 'prop-types';

function UserProfileData({url, name, username, password, motto}) {
  return (
    <div>
      <div>
        {url}
      </div>
      <div>
        {name}
      </div>
      <div>
        {username}
      </div>
      <div>
        {password}
      </div>
      <div>
        {password}
      </div>
      <div>
        {motto}
      </div>
    </div>
  );
}

UserProfileData.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  motto: PropTypes.string.isRequired,
};

export default UserProfileData;
