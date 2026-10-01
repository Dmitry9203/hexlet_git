const readline = require('readline');

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Проверяем делители до n
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function firstNPrimes(n) {
  const primes = [];
  let candidate = 2;
  while (primes.length < n) {
    if (isPrime(candidate)) primes.push(candidate);
    candidate++;
  }
  return primes;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Сколько первых простых чисел вывести? N = ', (answer) => {
  const N = parseInt(answer, 10);

  if (isNaN(N) || N < 1) {
    console.log('Нужно ввести целое число ≥ 1');
    rl.close();
    return;
  }

  const primes = firstNPrimes(N);
  console.log(`Первые ${N} простых чисел:`);
  console.log(primes.join(', '));

  rl.close();
});