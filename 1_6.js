const readline = require('readline');

function primeFactorization(n) {
  const factors = [];

  if (n % 2 === 0) {
    let exp = 0;
    while (n % 2 === 0) { n /= 2; exp++; }
    factors.push([2, exp]);
  }

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      let exp = 0;
      while (n % i === 0) { n /= i; exp++; }
      factors.push([i, exp]);
    }
  }

  if (n > 1) factors.push([n, 1]);

  return factors;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите целое число N > 1: ', (answer) => {
  const N = parseInt(answer, 10);

  if (isNaN(N) || N <= 1) {
    console.log('Нужно ввести целое число больше 1');
    rl.close();
    return;
  }

  const factors = primeFactorization(N);

  console.log(`\nРазложение числа ${N} на простые множители:`);
  for (const [prime, exp] of factors) {
    console.log(`${prime}^${exp}`);
  }

  const pretty = factors.map(([p, e]) => `${p}^${e}`).join(' · ');
  console.log(`\n${N} = ${pretty}`);

  rl.close();
});