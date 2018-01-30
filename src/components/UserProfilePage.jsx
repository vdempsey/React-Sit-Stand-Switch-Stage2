import React from 'react';
import UserProfileData from './UserProfileData';

function UserProfilePage(props) {
  console.log(props);
  return(
    <div>
      <p>This is a profile view page</p>
      <UserProfileData
        name={props.name} />
    </div>
  );
}

export default UserProfilePage;
