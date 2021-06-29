import React from "react";

import "./styles/AgradecimientosNew.css";

import Agradecimiento from "../components/Agradecimiento";
import AgradecimientosForm from "../components/AgradecimientosForm";

function AgradecimientosNew() {
  const handleDateChange = (e) => {
    setFormDate({
      ...formDate,
      [e.target.name]: [e.target.value],
    });
  };
  const handleAgradecimientoChange = (e) => {
    const nextForm = agradecimientosLista.agradecimientos;
    nextForm[e.target.name] = e.target.value;

    setAgradecimientosLista({
      agradecimientos: nextForm,
    });
  };

  const [agradecimientosLista, setAgradecimientosLista] = React.useState({
    agradecimientos: {},
  });
  const [formDate, setFormDate] = React.useState({
    date: "",
  });

  return (
    <React.Fragment>
      <div className="hero"></div>
      <div className="agradecimiento-container">
        <Agradecimiento fecha={formDate.date} lista={agradecimientosLista.agradecimientos} />
      </div>
      <div className="form-container">
        <h2>Nuevo día... Nuevas cosas que Agradecer</h2>
        <AgradecimientosForm
          formDataValue={formDate}
          formDateInput={handleDateChange}
          formAgradecimientoValue={agradecimientosLista}
          formAgradecimientoInput={handleAgradecimientoChange}
        />
      </div>
    </React.Fragment>
  );
}

export default AgradecimientosNew;
