import React from 'react';
import logoSm from '../assets/images/sit-stand-icon.png';
import logoType from '../assets/images/logotype.png';

function BannerTwo(props){
  return(
    <div>
      <div>
        <div>
          <img src={logoSm} />
        </div>
        <div>
          <img src={logoType} />
          <p>{props.bannerText}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
