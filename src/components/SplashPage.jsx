import React from 'react';
import Banner from './Banner';
import TestimonialList from './TestimonialList';
import Menu from './Menu';


function SplashPage(){
  return (
    <div>
      <Banner bannerText='Activate your 8 to 5' />
      <Menu />
      <TestimonialList />
    </div>
  );
}

export default SplashPage;
