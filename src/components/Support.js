import React from "react";

import { Link as Scroll } from "react-scroll";

import logoSemtraco from "../assets/statics/isologo_semtraco.png";
import logoCase from "../assets/statics/isologo-caseih.svg";
import logoConcesionario from "../assets/statics/semtraco-1-concesionario-2019.png";
import logoRepuestos from "../assets/statics/semtraco-1-venta-repuestos 2019.png";

const Suport = (props) => (
    <section id="support">
        <div className="container text-center">
            <div className="row justify-content-center">
                <h2 className="col-12 mb-5">Servicio técnico posventa asegurado</h2>
                <h3 className="col-12">Con el respaldo de:</h3>
                <div className="col-12 mt-2">
                    <img id="logo_semtraco" src={logoSemtraco} alt="Isologotipo Semtraco"></img>
                </div>
                <h5 className="col-12 mt-5">Concesionario Oficial Case IH Argentina</h5>
                <div className="col-12 mt-1">
                    <img id="logo_case" src={logoCase} alt="Isologotipo Semtraco"></img>
                </div>
                <p className="col-12 mt-5">Elegido Concesionario Premium por quinto año consecutivo</p>
                <div className="col-12 col-md-3 col-lg-4">
                    <img className="img-fluid" id="logo_concesionario" src={logoConcesionario} alt="Isologotipo concesionario 2019"></img>
                </div>
                <div className="col-12 col-md-3 col-lg-4">
                    <img className="img-fluid" id="logo_repuestos" src={logoRepuestos} alt="Isologotipo venta repuestos 2019"></img>
                </div>
                <p className="col-12 mt-2"><strong>Word Class Dealer</strong></p>
                <p className="col-12">Excelencia máxima en gestión, desempeño y satisfacción del cliente</p>
                <div className="col-12 mt-4">
                    <Scroll
                        to="form"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={599}
                        className="btn btn-lg btn-primary text-white"
                        >
                        Contactanos
                    </Scroll>
                </div>
            </div>
        </div>
    </section>
);

export default Suport;
