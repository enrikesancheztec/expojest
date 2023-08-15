import utileriasNombre from "../app/utileriasNombre";

const { concatenaNombreCompleto } = utileriasNombre();

test("Debe calcular el nombre completo correctamente", () => {
  // Given
  var nombre = 'Enrique';
  var apellido = 'Sanchez';

  var expectedOutput = 'Enrique Sanchez';

  // When
  var actualOutput = concatenaNombreCompleto(nombre, apellido);

  // Then
  expect(expectedOutput).toBe(actualOutput);
});