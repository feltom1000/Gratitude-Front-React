import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import AgradecimientosList from "./pages/AgradecimientosList";
import AgradecimientoDetalle from "./pages/agradecimientoDetalle";
import AgradecimientosNew from "./pages/AgradecimientosNew";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      {/* <AgradecimientosList
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
        <Switch>
          <Route exact path="/list" component={AgradecimientosList} />
          <Route exact path="/details" component={AgradecimientoDetalle} />
          <Route exact path="/form" component={AgradecimientosForm} />
        </Switch> */}
        <AgradecimientosNew />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
