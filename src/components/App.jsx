import React from 'react';
import Header from './Header';
import TestimonialList from './TestimonialList';
import SplashPage from './SplashPage';
import How from './How';
import Why from './Why';
import Contact from './Contact';
import Error404 from './Error404';
import Register from './Register';
import UserProfilePage from './UserProfilePage';
import UserProfileData from './UserProfileData';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import '../stylesheets/ui.scss';
import '../stylesheets/index.scss';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'test'
      }
    };
    this.onNewUserCreation = this.onNewUserCreation.bind(this);
  }

  onNewUserCreation(newName) {
    console.log(newName);
    this.setState({userInfo: {name: newName}});
  }


  render() {
    return(
      <div>
        <Router history={hashHistory}>
          <Route exact path='/' component={SplashPage} />
          <Route path='/How' component={How} />
          <Route path='/Why' component={Why} />
          <Route path='/Contact' component={Contact} />
          <Route path='/TestimonialList' component={TestimonialList} />
          <Route path='/Register' component={() => (
            <Register callback={this.onNewUserCreation}/> )} />
          <Route path='/UserProfilePage'
            component={UserProfilePage} />
          <Route component={Error404} />
        </Router>
      </div>
    );
  }
}



export default App;
