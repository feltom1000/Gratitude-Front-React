import React from "react";

import "./styles/AgradecimientosForm.css";

function AgradecimientosForm(props) {
  return (
    <form>
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
          name="1º: "
          value={props.formAgradecimientoValue.agradecimientos1}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="2º: "
          value={props.formAgradecimientoValue.agradecimientos2}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="3º: "
          value={props.formAgradecimientoValue.agradecimientos3}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="4º: "
          value={props.formAgradecimientoValue.agradecimientos4}
        />
        <input
          onChange={props.formAgradecimientoInput}
          className="inputForm"
          type="text"
          name="5º: "
          value={props.formAgradecimientoValue.agradecimientos5}
        />
      </div>

      {/* <button onClick={this.handleClick} className="btn btn-primary">
        Guardar
      </button> */}
    </form>
  );
}

export default AgradecimientosForm;
