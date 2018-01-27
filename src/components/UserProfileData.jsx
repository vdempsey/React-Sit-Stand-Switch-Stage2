import React from 'react';
import PropTypes from 'prop-types';

function UserProfileData({url, name, username, password, motto}) {
  return (
    <tr>
      <td>
        {url}
      </td>
      <td>
        {name}
      </td>
      <td>
        {username}
      </td>
      <td>
        {password}
      </td>
      <td>
        {password}
      </td>
      <td>
        {motto}
      </td>
    </tr>
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
