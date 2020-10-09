import React from 'react';
import classNames from 'classnames';

import logoSemtracoBco from '../assets/statics/isologo-semtraco-blanco.png';

const Navbar =  (props) => {
  const { isTanks } = props;

  const navbarClass = classNames('navbar navbar-expand-lg navbar-dark', {
    isTanks
  });
  
  return (
    <nav className={navbarClass}>
      <div className="container">
        <a href="/" className="navbar-brand " alt="Isologotipo Semtraco">
          <img src={logoSemtracoBco} alt="Isologotipo Semtraco"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;