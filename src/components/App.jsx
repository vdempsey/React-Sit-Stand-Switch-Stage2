import React from 'react';
import Header from './Header';
import TestimonialList from './TestimonialList';
import SplashPage from './SplashPage';
import How from './How';
import Why from './Why';
import Contact from './Contact';
import Error404 from './Error404';
import Register from './Register';
import ThankYou from './ThankYou';
import UserProfilePage from './UserProfilePage';
import NewUserControl from './NewUserControl';
import UserProfileData from './UserProfileData';
import NewRegisterForm from './NewRegisterForm';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import '../stylesheets/ui.scss';
import '../stylesheets/index.scss';



function App() {
  return(
    <div>
      <Router history={hashHistory}>
        <Route exact path='/' component={SplashPage} />
        <Route path='/How' component={How} />
        <Route path='/Why' component={Why} />
        <Route path='/Contact' component={Contact} />
        <Route path='/ThankYou' component={ThankYou} />
        <Route path='/TestimonialList' component={TestimonialList} />
        <Route path='/Register' component={Register} />
        <Route path='/UserProfilePage' component={UserProfilePage} />
        <Route path='/UserProfileData' component={UserProfileData} />
        <Route path='/NewUserControl' component={NewUserControl} />
        <Route path='/NewRegisterForm' component={NewRegisterForm} />
        <Route component={Error404} />
      </Router>
    </div>
  );
}


export default App;
