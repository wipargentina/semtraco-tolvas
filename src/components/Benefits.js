import React from "react";

import iconoDisponibilidad from "../assets/statics/icono_disponibilidad.svg";
import iconoFinanciacion from "../assets/statics/icono_financiacion.svg";
import iconoPagoSoja from "../assets/statics/icono_pago_con_soja.svg";
import iconoPostVenta from "../assets/statics/icono_servicio_posventa.svg";

const Benefits = (props) => (
  <div className="benefits">
    <div className="container">
      <div className="row ">
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoDisponibilidad} alt="ícono disponibilidad inmediata"/>
            </div>
            <div className="benefits-item-title">Disponibilidad inmediata</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoFinanciacion} alt="ícono financiación Semtraco"/>
            </div>
            <div className="benefits-item-title">
                Financiación Semtraco hasta 36 meses
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoPagoSoja} alt="ícono pago con soja"/>
            </div>
            <div className="benefits-item-title">
            Pago total con soja
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoPostVenta} alt="ícono post venta Semtraco"/>
            </div>
            <div className="benefits-item-title">
            Servicio post venta Semtraco
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Benefits;
