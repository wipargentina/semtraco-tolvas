import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faDollarSign,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";

const Benefits = (props) => (
  <div className="benefits">
    <div className="container">
      <div className="row ">
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <FontAwesomeIcon icon={faDollarSign} size="4x" fixedWidth />
            </div>
            <div className="benefits-item-title">Disponibilidad inmediata</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <FontAwesomeIcon icon={faDollarSign} size="4x" fixedWidth />
            </div>
            <div className="benefits-item-title">
                Financiación Semtraco hasta 36 meses
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <FontAwesomeIcon icon={faDollarSign} size="4x" fixedWidth />
            </div>
            <div className="benefits-item-title">
            Pago total con Soja
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <FontAwesomeIcon icon={faDollarSign} size="4x" fixedWidth />
            </div>
            <div className="benefits-item-title">
            Servicio Post Venta Semtraco
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Benefits;
