import React from "react";

import "./styles/AgradecimientosForm.css";

function AgradecimientosForm(props) {
  return (
    <form>
      <div className="form-group">
        <label>Fecha</label>
        <input
          onChange={props.formDataInput}
          className="inputForm"
          type="date"
          name="date"
          value={props.formDataValue.date}
        />
      </div>
      <div className="form-group">
        <label>Agradecimientos</label>
        <input
          onChange={props.formDataInput}
          className="inputForm"
          type="text"
          name="agradecimientos1"
          value={props.formDataValue.agradecimientos1}
        />
        <input
          onChange={props.formDataInput}
          className="inputForm"
          type="text"
          name="agradecimientos2"
          value={props.formDataValue.agradecimientos2}
        />
        <input
          onChange={props.formDataInput}
          className="inputForm"
          type="text"
          name="agradecimientos3"
          value={props.formDataValue.agradecimientos3}
        />
        <input
          onChange={props.formDataInput}
          className="inputForm"
          type="text"
          name="agradecimientos4"
          value={props.formDataValue.agradecimientos4}
        />
        <input
          onChange={props.formDataInput}
          className="inputForm"
          type="text"
          name="agradecimientos5"
          value={props.formDataValue.agradecimientos5}
        />
      </div>

      {/* <button onClick={this.handleClick} className="btn btn-primary">
        Guardar
      </button> */}
    </form>
  );
}

export default AgradecimientosForm;
