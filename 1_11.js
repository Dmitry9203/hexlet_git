const readline = require('readline');

function findPythagoreanTriples(N, M) {
  const triples = [];
  for (let a = N; a <= M; a++) {
    for (let b = a; b <= M; b++) {
      const c2 = a * a + b * b;
      const c = Math.round(Math.sqrt(c2));
      if (c * c === c2 && c <= M && c > b) {
        triples.push([a, b, c]);
      }
    }
  }
  return triples;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите N: ', (ansN) => {
  rl.question('Введите M: ', (ansM) => {
    const N = parseInt(ansN, 10);
    const M = parseInt(ansM, 10);

    if (isNaN(N) || isNaN(M) || N < 1 || M < N) {
      console.log('Нужно 1 ≤ N ≤ M');
      rl.close();
      return;
    }

    const triples = findPythagoreanTriples(N, M);
    console.log(`\nПифагоровы тройки в [${N}, ${M}]:`);
    for (const [a, b, c] of triples) {
      console.log(`(${a}, ${b}, ${c})  →  ${a}² + ${b}² = ${c}²`);
    }
    console.log(`\nВсего: ${triples.length}`);

    rl.close();
  });
});