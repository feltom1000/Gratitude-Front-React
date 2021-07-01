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

const findIndexWithID = (array, id) => {
  array.indexOf((x) => x.id === id);
};

// const ejemplo = new Controlador([
//   {
//     id: 10,
//     fecha: 27 / 1 / 97,
//     items: [],
//   },
// ]);

class Controlador {
  constructor(lista) {
    this.lista = lista;
  }

  addNew(id, fecha, items) {
    this.lista.push({
      id: id,
      fecha: fecha,
      items: items,
    });
  }

  deleteOne(id) {
    this.lista.splice(findIndexWithID(this.lista, id), 1);
  }

  showAll() {
    return this.lista;
  }

  showOneWithID(id) {
    const filterId = this.lista.filter(x => x.id === id);
    return filterId;
  }

  showWithFechaFilter(fecha) {
    const filterPorFecha = this.lista.filter((x) => x.fecha === fecha);
    return filterPorFecha;
  }

  editFecha(id, fecha) {
    const indexValue = findIndexWithID(this.lista, id);
    this.lista[indexValue].fecha = fecha;
  }

  editLista(id, items) {
    this.lista[findIndexWithID(this.lista, id)].items = items;
  }
}

module.exports = Controlador;
