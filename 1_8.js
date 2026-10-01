const readline = require('readline');

function sieve(limit) {
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) isPrime[j] = false;
    }
  }
  return isPrime;
}

function findThreePrimes(n, isPrime) {
  const primes = [];
  for (let i = 2; i <= n; i++) if (isPrime[i]) primes.push(i);

  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
      const third = n - primes[i] - primes[j];
      if (third < primes[j]) break;
      if (isPrime[third]) return [primes[i], primes[j], third];
    }
  }
  return null;
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
      console.log('Некорректный ввод: нужно 1 ≤ N ≤ M');
      rl.close();
      return;
    }

    const isPrime = sieve(M);
    console.log(`\nНечётные числа из [${N}, ${M}]:\n`);

    for (let n = N; n <= M; n++) {
      if (n % 2 === 0) continue;
      const triple = findThreePrimes(n, isPrime);
      if (triple) {
        console.log(`${n} = ${triple[0]} + ${triple[1]} + ${triple[2]}`);
      } else {
        console.log(`${n} — НЕ представимо`);
      }
    }

    rl.close();
  });
});