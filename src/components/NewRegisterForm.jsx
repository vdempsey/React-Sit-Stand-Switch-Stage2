import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class NewRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return (
      <div>
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}><Link to='/NewUserControl'>Sign Me Up!</Link></button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

NewRegisterForm.propTypes = {
  onClick: PropTypes.func
};

export default NewRegisterForm;
