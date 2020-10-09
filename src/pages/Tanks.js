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
          <h3>¡Muchas gracias por completar el formulario!</h3>
          <p>En breve nuestro equipo se contactará contigo</p>
          <p>Te invitamos a que descargues los datos técnicos de nuestras tolvas</p>
          <a href="https://drive.google.com/file/d/1ouYpUnQTFfZMWeDl_acJUc08D3tSWsWW/view?usp=sharing" alt="programacion" className="btn btn-primary btn-cta" target="_blank" rel="noopener noreferrer">Descargar manual</a>
          <p>
            Visitanos en nuestra web <br/>
            <a href="https://www.semtraco.com.ar/" target="_blank" rel="noopener noreferrer">www.semtraco.com.ar</a>          
          </p>
          <p>ó en nuestras redes sociales</p>
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
          
        </div>
      </div>
    </div>
  </div>
  </>
)

export default Tanks;