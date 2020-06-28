const saludar = require('../app');
var x = true;

describe('verificar que la variable es true', () => {
  it('La función saluda', () => {
    expect(saludar('Platzi')).toBe('Hola Platzi');
  });

  it('X es true', () => {
    expect(x).toBeTruthy();
  })
})
