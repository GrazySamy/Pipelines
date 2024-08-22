const { areaCubo, volumeCubo } = require('../src/index');

// Testes para calculo da area o cubo
test('lado 2 para retornar area 24', () => {
  expect(areaCubo(2)).toBe(24);
});

// Testes para calculo da volume o cubo
test('lado 3 para retornar volume 27', () => {
  expect(volumeCubo(3)).toBe(27);
});

// Testes para calculo da volume o cubo
test('lado 10 para retornar volume 1000', () => {
  expect(volumeCubo(10)).toBe(1000);
});