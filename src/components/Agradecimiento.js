import React from "react";

import "./styles/agradecimiento.css";

function Agradecimiento(props) {
  const listaAgradecimientos = props.lista

  return (
    <div className="Marco">
      <div className="Agradecimientos">
        <h2>
          Agradecimientos del <em>{props.fecha}</em>
        </h2>
        <ul>
          {listaAgradecimientos && listaAgradecimientos.map((agradecimiento) => {
            return (
              <li>
                <em>{agradecimiento}</em>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Agradecimiento;
