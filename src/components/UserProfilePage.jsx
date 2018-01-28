import React from 'react';
import UserProfileData from './UserProfileData';

class UserProfilePage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      defaultUser: {
        url: 'new url',
        name: 'some name',
        username: 'test',
        password: 'test',
        motto: 'test'
      }
    };
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    this.setState({defaultUser: newUser});
  }

  render() {
    return(
      <div>
        <UserProfileData url={this.url}/>
      </div>
    );
  }
}

export default UserProfilePage;
