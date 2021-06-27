import React from "react";

import "./styles/AgradecimientosNew.css";

import Agradecimiento from "../components/Agradecimiento";
import AgradecimientosForm from "../components/AgradecimientosForm";

function AgradecimientosNew() {

  const handleChange = (e) => {
    setFormData({
      form: {
        ...formData.form,
        [e.target.name] : [e.target.value],
      },
    });
  };

  const [formData, setFormData] = React.useState({
    loading: false,
    error: null,
    form: {
      date: "",
      agradecimientos: [],
    },
  });

  return (
    <React.Fragment>
      <div className="hero"></div>
      <div className="agradecimiento-container">
        <Agradecimiento />
      </div>
      <div className="form-container">
        <AgradecimientosForm
          formDataValue={formData.form}
          formDataInput={handleChange}
        />
      </div>
    </React.Fragment>
  );
}

export default AgradecimientosNew;
