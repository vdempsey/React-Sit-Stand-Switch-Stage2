import React from 'react';
import RegisterFormA from './RegisterFormA';

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
      <RegisterFormA onNewUser={this.addUser}/>
    </div>
  );
}
}

export default UserProfilePage;
