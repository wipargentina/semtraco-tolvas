import React from "react";

import tolvaVentajas from "../assets/statics/tolva-ventajas.jpg";

const Typologies = (props) => (
    <section id="typologies" >
        <div className="container text-center">
            <div className="row justify-content-center">
                <h2 className="col-12 mb-5">Tolvas autodescargables Semtraco</h2>
                <h3 className="col-12 mb-4">¡Diseño dinámico!</h3>
                <h5 className="col-12 mb-4">Gran capacidad para asistir a equipos de alto rendimiento dentro de los lotes de cosecha.</h5>
                <h2 className="col-12 mt-5">Ventajas</h2>
                <ul className="col-12 col-lg-6 mt-4 text-left pl-4">
                    <li><strong>Mayor productividad de la cosechadora</strong>. Hasta un 20 % de disminución en tiempos muertos de cosecha, de acuerdo a la extensión de los lotes y a la versión que elijas</li>
                    <li><strong>Mayor maniobrabilidad y versatilidad</strong> que la cosechadora, para desplazamiento dentro del terreno, atrancamiento y descarga sobre camiones y acoplados</li>
                    <li><strong>Menor tasa de roturas en cosechadoras</strong>  por traslados dentro de los lotes de cosecha</li>
                    <li><strong>Baja inversión de capital</strong>, para lograr mayor productividad</li>
                    <li>Conocemos nuestro diseño de punta a punta, <strong>optimizamos el producto hacia un bajo mantenimiento</strong></li>
                    <li><strong>Materiales premium, acabados de alta calidad</strong></li>
                    <li><strong>¡Post venta Semtraco!</strong> Tu tiempo nos importa y nos hace ser más eficientes</li>
                </ul>
                <div className="col-12 col-md-10 col-lg-6 px-3 px-md-5 my-auto">
                    <img className="img-fluid rounded-circle img_tolva_ventajas" src={tolvaVentajas} alt="ícono pago con soja"/>
                </div>
            </div>
        </div>
    </section>
);

export default Typologies;
