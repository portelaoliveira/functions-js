// # methods
// A5 -> A5 => Method Map
// A5 -> Aj, onde, 0 <= j <= 5 => Method Filter
// A5 -> A1 => Method Reduce

const faturamento = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000, 120_000,
  130_000, 120_000, 165_000,
];

// Todos os 3 métodos são métodos que não promovem mutação ao array original

// Method Map

const faturamentoReais = faturamento.map(
  valorFaturamentoMensal => 4.79 * valorFaturamentoMensal
);

// console.log(faturamentoReais);

// Method Filter - recebe um predicate que é uma função que retorna True ou false

const faturamentoMaiorQueODesejado = faturamento.filter(
  valorFaturamentoMensal => valorFaturamentoMensal >= 130_000
);

// console.log(faturamentoMaiorQueODesejado);

// Method Reduce

// let faturamentoAnual = 0;

// for (let i = 0; i < faturamento.length; i++) {
//   faturamentoAnual += faturamento[i];
// }

// console.log(`O faturamento anual foi de ${faturamentoAnual}.`);
// console.log(
//   `O faturamento médio do último foi de ${
//     faturamentoAnual / faturamento.length
//   }.`
// );

const faturamentoAnual = faturamento.reduce(
  (acumulador, elementoAtual) => acumulador + elementoAtual,
  0
);

console.log(`O faturamento anual foi de ${faturamentoAnual}.`);
console.log(
  `O faturamento médio do último foi de ${
    faturamentoAnual / faturamento.length
  }.`
);
