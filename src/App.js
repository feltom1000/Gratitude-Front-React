import React from "react";

import AgradecimientosList from "./pages/AgradecimientosList";
import AgradecimientoDetalle from "./pages/agradecimientoDetalle";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AgradecimientosList
        agradecimientos={[
          {
            fecha: "22/03/2021",
            lista: [
              "La vida es confusa",
              "La vida es difusa",
              "La vida es ambigua",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
          {
            fecha: "23/03/2021",
            lista: [
              "Mis desiciones me hace",
              "Mis acciones me forman",
              "Mi pasado NO me marca",
            ],
          },
        ]}
      />
    </React.Fragment>
  );
}

export default App;
