import React from 'react';

import logoWip from '../assets/statics/wip-white.svg';

const Footer =  (props) => (
  <footer>
    <div className="container">
      <a href="https://www.wipargentina.com/" target="_blank" rel="noopener noreferrer"><img src={logoWip} alt="wip" className="wip" /></a>
    </div>
  </footer>
)

export default Footer;