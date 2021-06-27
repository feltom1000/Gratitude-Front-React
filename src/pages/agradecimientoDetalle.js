import React from "react";

import Agradecimiento from '../components/Agradecimiento.js'
import "./styles/agradecimientoDetalle.css";

function AgradecimientoDetalle(props) {

  return (
    <div className="Fondo">
      <div className="Marco">
        <Agradecimiento fecha={props.fecha} lista={props.lista} />
      </div>
    </div>
  );
}

export default AgradecimientoDetalle;
