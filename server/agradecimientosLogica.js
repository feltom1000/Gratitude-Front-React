const agradecimientosAll = [
  {
    id: 10,
    fecha: "27/01",
    lista: {
      lalalala1: "lalalal1",
      lalalala2: "lalalal1",
      lalalala3: "lalalal1",
      lalalala4: "lalalal1",
      lalalala5: "lalalal1",
    },
  },
  {
    id: 20,
    fecha: "27/01",
    lista: {
      lalalala1: "lalalal1",
      lalalala2: "lalalal1",
      lalalala3: "lalalal1",
      lalalala4: "lalalal1",
      lalalala5: "lalalal1",
    },
  },
  {
    id: 30,
    fecha: "27/01",
    lista: {
      lalalala1: "lalalal1",
      lalalala2: "lalalal1",
      lalalala3: "lalalal1",
      lalalala4: "lalalal1",
      lalalala5: "lalalal1",
    },
  },
  {
    id: 40,
    fecha: "27/01",
    lista: {
      lalalala1: "lalalal1",
      lalalala2: "lalalal1",
      lalalala3: "lalalal1",
      lalalala4: "lalalal1",
      lalalala5: "lalalal1",
    },
  },
  {
    id: 50,
    fecha: "27/01",
    lista: {
      lalalala1: "lalalal1",
      lalalala2: "lalalal1",
      lalalala3: "lalalal1",
      lalalala4: "lalalal1",
      lalalala5: "lalalal1",
    },
  },
];

const findIndexWithID = (id) => {
  agradecimientosAll.findIndex((x) => x.id === id)
}

class Agradecimiento {
  constructor(id, fecha, lista) {
    this.id = id;
    this.fecha = fecha;
    this.lista = lista;
  }

  addNew(fecha, lista, id) {
    this.lista.push({
      id: id,
      fecha: fecha,
      lista: { lista },
    });
  }

  deleteOne(id) {
    this.lista.splice(findIndexWithID(id), 1);
  }

  showAll() {
    console.log(this.lista);
  }

  showOneWithID(id) {
    console.log(this.lista[findIndexWithID(id)]);
  }

  showWithFechaFilter(fecha) {
    const filterPorFecha = this.lista.filter((x) => x.fecha === fecha);
    console.log(filterPorFecha);
  }

  editFecha(id, fecha){
    this.lista[findIndexWithID(id)].fecha = fecha
  }

  editLista(id, lista){
    this.lista[findIndexWithID(id)].lista = lista
  }
}

module.exports = Agradecimiento;