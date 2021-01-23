import React from 'react';
import '../header/header.css';

const Header = (props) => {
 return (
  <div>
   <header>
    <h1 className='header-title'>{props.brandName}</h1>
   </header>
  </div>
 );
};

export default Header;
