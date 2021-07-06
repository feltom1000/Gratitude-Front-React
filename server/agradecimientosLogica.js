
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
    const indexValue = this.lista.findIndex((x) => x.id === id);
    this.lista.splice(indexValue, 1);
  }

  showAll() {
    return this.lista;
  }

  showOneWithID(id) {
    const filterId = this.lista.filter((x) => x.id === id);
    return filterId;
  }

  showWithFechaFilter(fecha) {
    const filterPorFecha = this.lista.filter((x) => x.fecha === fecha);
    return filterPorFecha;
  }

  editFecha(id, fecha) {
    const indexValue = this.lista.findIndex((x) => x.id === id);
    this.lista[indexValue].fecha = fecha;
  }

  editItem(id, indexItem, item) {
    const indexValue = this.lista.findIndex((x) => x.id === id)
    this.lista[indexValue].items[indexItem] = item;
  }
}

module.exports = Controlador;
