import React from 'react';
import UserProfileData from './UserProfileData';

function UserProfilePage(props) {
  console.log(props);
  return(
    <div>
      <UserProfileData
        name={props.name} />
    </div>
  );
}

export default UserProfilePage;
