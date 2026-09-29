// let transancion = Number(process.argv[3]);

export function calculadoraCosto(monto) {
  const TASA_FIJA = 3;
  const INTERES = 0.01;

  // Convertimos el texto a número
  let montoConvertido = Number(monto);

  // Usamos la nueva variable numérica en la fórmula
  let valor_a_pagar = montoConvertido * INTERES + montoConvertido + TASA_FIJA;

  return valor_a_pagar;
}
// console.log(calculadoraCosto(transancion));
