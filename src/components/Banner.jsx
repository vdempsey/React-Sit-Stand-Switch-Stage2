import React from 'react';
import banner from '../assets/images/index-logo.gif';

function Banner(props){
  return(
    <div>
      <img src={banner} />
      <p>{props.bannerText}</p>
    </div>
  );
}

export default Banner;
