import React from 'react';
import Header from './Header';
import TestimonialList from './TestimonialList';
import SplashPage from './SplashPage';
import Contact from './Contact';
import Error404 from './Error404';
import Register from './Register';
import { Router, Route, hashHistory } from 'react-router';
import '../stylesheets/ui.scss';



function App() {
  return(
    <div>
      <Header/>
      <Router history={hashHistory}>
        <Route exact path='/' component={SplashPage} />
        <Route path='/Contact' component={Contact} />
        <Route path='/TestimonialList' component={TestimonialList} />
        <Route path='/Register' component={Register} />
        <Route component={Error404} />
      </Router>
    </div>
  );
}


export default App;
