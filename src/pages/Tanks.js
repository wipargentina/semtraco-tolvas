import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Tanks =  (props) => (
  <>
  <Navbar isTanks />
  <div className="tanks">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>¡Muchas gracias por completar el formulario!</h2>
          <h4 className="mt-4">En breve nuestro equipo se contactará contigo</h4>
          <p className="mt-5">Te invitamos a que descargues los datos técnicos de nuestras tolvas:</p>
          <div className="row justify-content-center mt-2 mb-lg-5">
            <div className="col-12 col-md-6 col-lg-4">
              <a id="btn_tolva_20tn" href="https://drive.google.com/file/d/1Htf71Exl0pt9uMaI9PQqd3bCTTaD-AE3/view?usp=sharing" alt="Manual Tolva eb20-2 - 20 toneladas" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Modelo eb20-2 <strong>- 20 tn</strong></a>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <a id="btn_tolva_26tn" href="https://drive.google.com/file/d/1jdJ32E2PsbK3PzhdCgPJoUape9cwMmak/view?usp=sharing" alt="Manual Tolva eb26-2 - 26 toneladas" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Modelo eb26-2 <strong>- 26 tn</strong></a>
            </div>
            <div className="col-12 col-lg-4">
              <a id="btn_tolva_33tn" href="https://drive.google.com/file/d/1hFami_l2YuWbeJmJ5fWx4bO9ghlHvhxB/view?usp=sharing" alt="Manual Tolva eb33-2 - 33 toneladas" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Modelo eb33-2 <strong>- 33 tn</strong></a>
            </div>
          </div>

          <p className="mt-4">
            Visitanos en nuestra web <br/>
            <a id="btn_pagina_web" href="https://www.semtraco.com.ar/?utm_source=landing-tolvas&utm_medium=cta&utm_campaign=trafico-sitio-web" target="_blank" rel="noopener noreferrer">www.semtraco.com.ar</a>          
          </p>

          <p>o en nuestras redes sociales</p>
          <div className="social">
            <a className="mx-2" href="https://www.facebook.com/semtraco.sa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
              />
            </a>
            <a className="mx-2" href="https://www.instagram.com/semtraco_sa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
              />
            </a>
          </div>

          <div className="row justify-content-center mt-5">
            <p>También podés ingresar a nuestra tienda online y aprovechar nuestras ofertas</p>
            <div className="col-12">
              <a id="btn_tienda_online" href="https://www.semtraco.com.ar/es/home/tienda/tienda.html?utm_source=landing-tolvas&utm_medium=cta&utm_campaign=trafico-sitio-web-area-ecommerce" alt="Link a nuestra tienda online" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Recorré nuestra  <strong> tienda online</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
)

export default Tanks;