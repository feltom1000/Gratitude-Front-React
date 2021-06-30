const Agradecimiento = require("./agradecimientosLogica.js");

describe("Agradecimiento", () => {
  let object;

  describe("se Construye", () => {
    beforeAll(() => {
      object = new Agradecimiento(1, 27 / 1 / 97, {
        lalalala1: "lalalal1",
        lalalala2: "lalalal1",
        lalalala3: "lalalal1",
        lalalala4: "lalalal1",
        lalalala5: "lalalal1",
      });
    });

    describe("con el metodo constructor", () => {
      it("y todos sus atributos son correctos", () => {
        expect(object.id).toEqual(1);
        expect(object.fecha).toEqual(27 / 1 / 97);
        expect(object.lista).toEqual({
          lalalala1: "lalalal1",
          lalalala2: "lalalal1",
          lalalala3: "lalalal1",
          lalalala4: "lalalal1",
          lalalala5: "lalalal1",
        });
      });
    });
  });
});
