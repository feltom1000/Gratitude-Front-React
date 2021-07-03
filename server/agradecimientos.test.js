const Controlador = require('./agradecimientosLogica.js');

describe('El Controlador de agradecimientos', () => {
  let controladorObject;

  describe('se Construye', () => {
    beforeEach(() => {
      controladorObject = new Controlador(
        {
          id: 10,
          fecha: '27 / 1 / 97',
          items: [
            'Agradezco tener muchas ganas de hacer esto',
            'Agradezco a pesar de la adversidad no rendirme',
            'Esto esta re dificil la verdad...',
            'Odio hacer las cosas de nuevo, pero mejor que me vaya acostumbrando',
            'Por lo menos puedo Agradecer tener a alguien que me ayude.',
          ],
        },
      );
    });

    describe('con el metodo constructor', () => {
      it('y todos sus atributos son correctos', () => {
        expect(controladorObject.lista[0].id).toEqual(10);
        expect(controladorObject.lista[0].fecha).toEqual('27 / 1 / 97');
        expect(controladorObject.lista[0].items).toEqual([
          'Agradezco tener muchas ganas de hacer esto',
          'Agradezco a pesar de la adversidad no rendirme',
          'Esto esta re dificil la verdad...',
          'Odio hacer las cosas de nuevo, pero mejor que me vaya acostumbrando',
          'Por lo menos puedo Agradecer tener a alguien que me ayude.',
        ]);
      });
    });

    describe('Se añade un nuevo agradecimiento', () => {
      it('y se agrega al controlador', () => {
        controladorObject.addNew(15, '17 / 10 / 21', [
          'Agradezco estar laburando en algo como esto a pesar de que sea un desafio',
          'Agradezco dedicarle tiempo todos los días a pesar de que sea dificil',
          'Agradezco seguir intentando avanzar a pesar de sentir por momentos que no avanzo',
          'Agradezco seguir intentando confiar en el proceso a pesar de dudar tanto',
          'Agradezco.... o mas bien espero... que logre aprender a hacer las cosas bien.',
        ]);
        expect(controladorObject.lista[1].id).toEqual(15);
        expect(controladorObject.lista[1].fecha).toEqual('17 / 10 / 21');
        expect(controladorObject.lista[1].items).toEqual([
          'Agradezco estar laburando en algo como esto a pesar de que sea un desafio',
          'Agradezco dedicarle tiempo todos los días a pesar de que sea dificil',
          'Agradezco seguir intentando avanzar a pesar de sentir por momentos que no avanzo',
          'Agradezco seguir intentando confiar en el proceso a pesar de dudar tanto',
          'Agradezco.... o mas bien espero... que logre aprender a hacer las cosas bien.',
        ]);
      });
    });

    describe('Es eliminado un agradecimiento recien agregado', () => {
      it('y el elemento es deletiado del Controlador', () => {

        //Añado dos agradecimientos mas
        controladorObject.addNew(15, '17 / 10 / 21', [
          'Agradezco estar laburando en algo como esto a pesar de que sea un desafio',
          'Agradezco dedicarle tiempo todos los días a pesar de que sea dificil',
          'Agradezco seguir intentando avanzar a pesar de sentir por momentos que no avanzo',
          'Agradezco seguir intentando confiar en el proceso a pesar de dudar tanto',
          'Agradezco.... o mas bien espero... que logre aprender a hacer las cosas bien.',
        ]);

        controladorObject.addNew(20, '20 / 10 / 21', [
          'Este es el Segundo agradecimiento de la lista, index 1',
        ]);

        expect(controladorObject.lista).toHaveLength(3);
        controladorObject.deleteOne(15);
        expect(controladorObject.lista).not.toHaveLength(3);
        expect(controladorObject.lista).toHaveLength(2);
        expect(controladorObject.lista[0].id).not.toBe(15)
        expect(controladorObject.lista[1].id).not.toBe(15)
      });
    });

    describe('Se llama a toda la lista de Agradecimientos', () => {
      it('y la lista se imprime correctamente', () => {
        const returnValue = controladorObject.showAll();
        expect(returnValue).toEqual([
          {
            id: 10,
            fecha: '27 / 1 / 97',
            items: [
              'Agradezco tener muchas ganas de hacer esto',
              'Agradezco a pesar de la adversidad no rendirme',
              'Esto esta re dificil la verdad...',
              'Odio hacer las cosas de nuevo, pero mejor que me vaya acostumbrando',
              'Por lo menos puedo Agradecer tener a alguien que me ayude.',
            ],
          },
        ]);
      });
    });

    describe('Se agregan 2 Agradecimientos', () => {
      it('y es invocado uno en especifico utilizando el ID para llamarlo. Se Imprime solo uno, correctamente.', () => {
        controladorObject.addNew(20, '20 / 10 / 21', [
          'Este es el Segundo agradecimiento de la lista, index 1',
        ]);
        controladorObject.addNew(25, '20 / 10 / 21', [
          'Este es el tercer agradecimiento de la lista, index 2',
        ]);

        let returnValue = controladorObject.showOneWithID(20);
        expect(returnValue).toEqual([
          {
            id: 20,
            fecha: '20 / 10 / 21',
            items: ['Este es el Segundo agradecimiento de la lista, index 1'],
          },
        ]);
      });

      describe('Se intenta filtrar los agradecimientos de una fecha especifica', () => {
        it('Se retornan los garadecimientos de la fecha especifica', () => {
          //Se agregan nuevamente dos Agradecimientos nuevos
          controladorObject.addNew(20, '20 / 10 / 21', [
            'Este es el Segundo agradecimiento de la lista, index 1',
          ]);
          controladorObject.addNew(25, '20 / 10 / 21', [
            'Este es el tercer agradecimiento de la lista, index 2',
          ]);

          let returnValue =
            controladorObject.showWithFechaFilter('27 / 1 / 97');
          expect(returnValue).toEqual([
            {
              id: 10,
              fecha: '27 / 1 / 97',
              items: [
                'Agradezco tener muchas ganas de hacer esto',
                'Agradezco a pesar de la adversidad no rendirme',
                'Esto esta re dificil la verdad...',
                'Odio hacer las cosas de nuevo, pero mejor que me vaya acostumbrando',
                'Por lo menos puedo Agradecer tener a alguien que me ayude.',
              ],
            },
          ]);
          returnValue = controladorObject.showWithFechaFilter('20 / 10 / 21');
          expect(returnValue).toEqual([
            {
              id: 20,
              fecha: '20 / 10 / 21',
              items: ['Este es el Segundo agradecimiento de la lista, index 1'],
            },
            {
              id: 25,
              fecha: '20 / 10 / 21',
              items: ['Este es el tercer agradecimiento de la lista, index 2'],
            },
          ]);
        });
      });
    });

    describe('Se intenta editar una fecha de un agradecimiento especifico', () => {
      it('La fecha es editada con exito', () => {
        controladorObject.editFecha(10, '31/3/97');
        expect(controladorObject.lista[0].fecha).toEqual('31/3/97');
      });
    });

    describe('Se intentan editar los intems de un agradecimiento especifico', () => {
      it('La fecha es editada con exito', () => {
        controladorObject.editItem(10, 2, 'Anulo mi agradecimiento anteriore y ahora no agradezco este index del item :p');
        expect(controladorObject.lista[0].items[2]).toEqual('Anulo mi agradecimiento anteriore y ahora no agradezco este index del item :p');
      });
    });
  });
});

// Donde se guardan los agradecimientos. Array AgradecimientosAll es base de datos?

//Documentacion de comandos o metodos para test. Necesito preguntar si hay un objeto especifico guardado

//Puedo ya poner en la logica que el id se produzca solo. Necesito que sea un numero aleatorio que no se repita dos veces.

//
