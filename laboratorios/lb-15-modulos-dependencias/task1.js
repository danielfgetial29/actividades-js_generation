let transancion = process.argv[2];

export function calculadoraCosto(monto) {
  const TASA_FIJA = 3;
  let valor_a_pagar = monto * 0.01 + monto + TASA_FIJA;
  return valor_a_pagar;
}
console.log(calculadoraCosto(transancion));
