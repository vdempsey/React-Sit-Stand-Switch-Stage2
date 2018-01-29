import React from 'react';
import RegisterForm from './RegisterForm';
import UserProfileList from './UserProfileList';
import PropTypes from 'prop-types';

class NewUserControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = { masterUserList: [] };
    this.handleAddNewUser = this.handleAddNewUser.bind(this);
  }

  handleAddNewUser(newUser) {
    let newMasterUserList = this.state.masterUserList.slice();
    newMasterUserList.push(newUser);
    this.setState({masterUserList: newMasterUserList});
  }

  render() {
    <div>
      <p>Test!!!!</p>
      <UserProfileList userProfileList={this.state.masterUserList}/>
    </div>
  }
}


export default NewUserControl;
