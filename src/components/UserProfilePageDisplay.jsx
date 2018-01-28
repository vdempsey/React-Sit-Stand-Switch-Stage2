import React from 'react';
import UserProfileList from './UserProfileList';
import UserProfileData from './UserProfileData';

class UserProfilePageDisplay extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterUserList: []
    };
    this.handleAddingNewUserToList = this.handleAddingNewUserToList.bind(this);
  }

  handleAddingNewUserToList(newUser) {
    let newMasterUserList = this.state.masterUserList.slice();
    newMasterUserList.push(newUser);
    this.setState({masterUserList: newMasterUserList});
  }

  render() {
    return(
      <div>
        TBD
      </div>
    );
  }
}

export default UserProfilePageDisplay;
