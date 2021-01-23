import React from 'react';
import '../footer/footer.css';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
 return (
  <footer>
   <p>Copyright © Maurice Murphy {year}</p>
  </footer>
 );
};

export default Footer;
