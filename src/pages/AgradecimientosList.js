import React from "react";

import Agradecimiento from "../components/Agradecimiento.js";
import "./styles/AgradecimientosList.css";

function AgradecimientosList(props) {
  const [dataInputToFilter, setDataInputToFilter] = React.useState("");
  const [agradecimientosFiltrados, setAgradecimientosFiltrados] =
    React.useState(props.agradecimientos);

  const handleChange = (e) => {
    setDataInputToFilter(e.target.value);

    setAgradecimientosFiltrados(
      props.agradecimientos.filter((data) => {
        const strMatcheados = data.lista.filter((str) => {
          return str.toLowerCase().includes(dataInputToFilter.toLowerCase());
        });
        return strMatcheados.length > 0 || `${data.fecha}`.includes(dataInputToFilter);
        /** Filtro data.lista eso devuelve una lista de los elementos que matchean, eso me lo guardo en una variable y
         * hago un return de si esa variable .length es mayor o menor a 0*/
      })
    );
  };

  return (
    <div>
      <div id="main-container">
        <input
          className="inputFiltrador"
          type="text"
          placeholder="Filtrador"
          value={dataInputToFilter}
          onChange={handleChange}
          required
        ></input>
      </div>

      <div className="containerTotal">
        {agradecimientosFiltrados.map((agradecimiento) => {
          return (
            <div className="containerIndividual">
              <Agradecimiento {...agradecimiento} />{" "}
              {/*Esto es equivalente a "fecha = agradecimiento.fecha" y "lista = agradecimiento.lista" */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AgradecimientosList;
