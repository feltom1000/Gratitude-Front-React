import React from "react";

import forest from "../images/forest.svg";
import "./styles/AgradecimientosIndex.css";

function AgradecimientosIndex() {
  return (
    <div className="container-total">
      <div className="marco-text">
        <div className="text">
          <h1>Esta es tu App de Agradecimientos</h1>
          <h2>Aqui vendras a cambiar el foco de tu mente todos los días</h2>
          <h3>
            Solo respira profundo, mira hacía el cielo, sonrie.... y Agradece!
          </h3>
        </div>
        <div className="btn-container">
            <button className="btn-blue">Entrar</button>
        </div>
      </div>
      <img src={forest} alt="Forest" className="forest"></img>
    </div>
  );
}

export default AgradecimientosIndex;
