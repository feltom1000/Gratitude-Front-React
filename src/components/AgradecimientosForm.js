import React from "react";

import "./styles/AgradecimientosForm.css";

function AgradecimientosForm(props) {
  const handleClick = (e) => {
    return console.log("The button was Clicked");
  };

  return (
    <form onSubmit={props.envio}>
      <div className="form-group">
        <label>Fecha</label>
        <br />

        <input
          onChange={props.formDateInput}
          className="inputForm"
          type="date"
          name="date"
          value={props.formDataValue.date}
        />
      </div>
      <div className="form-group">
        <label>Agradecimientos</label>
        <br />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="0"
          value={props.formAgradecimientoValue[0]}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="1"
          value={props.formAgradecimientoValue[1]}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="2"
          value={props.formAgradecimientoValue[2]}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="3"
          value={props.formAgradecimientoValue[3]}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="4"
          value={props.formAgradecimientoValue[4]}
        />
      </div>
      <div className="button-container">
        <button onClick={handleClick} className="btn btn-primary">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default AgradecimientosForm;
