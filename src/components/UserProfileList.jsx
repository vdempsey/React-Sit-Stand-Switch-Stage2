import React from 'react';
import UserProfileData from './UserProfileData';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function UserProfileList(props) {

  return (
    <div>
       {props.userProfileList.map((user) =>
         <UserProfileData url={user.url}
           name={user.name}
           username={user.username}
           password={user.password}
           motto={user.motto}
           key={user.id}/>
       )}
     </div>
  );
}

UserProfileList.propTypes = {
  userProfileList: PropTypes.array
};

export default UserProfileList;
