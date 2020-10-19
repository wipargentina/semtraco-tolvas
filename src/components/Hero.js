import React from "react";

import Form from './Form.js';

import logoTolvaSemtraco from "../assets/statics/logo-tolvas-semtraco.svg";

const Hero = (props) => (
  <div className="hero">
    <div className="darken"></div>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-7 text-center">
            <h1>Nueva línea  de tolvas Autodescargables</h1>
            <img id="logo_tolva_semtraco" src={logoTolvaSemtraco} alt="Logotipo Tolvas Semtraco"></img>
            <h4>Tres versiones disponibles: <br/>20 - 26 - 33 tn.</h4>
            <h2>Agrandá tu equipo ahora...<br />
            ¡Entrega inmediata!</h2>
          </div>
          <div className="col-md-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;