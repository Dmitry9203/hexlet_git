const readline = require('readline');

function isDivisibleByDigits(n) {
  if (n <= 0) return false;
  let x = n;
  while (x > 0) {
    const digit = x % 10;
    if (digit === 0 || n % digit !== 0) return false;
    x = Math.floor(x / 10);
  }
  return true;
}

function findSelfDividingNumbers(N, M) {
  const result = [];
  for (let n = N; n <= M; n++) {
    if (isDivisibleByDigits(n)) result.push(n);
  }
  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите N: ', (ansN) => {
  rl.question('Введите M: ', (ansM) => {
    const N = parseInt(ansN, 10);
    const M = parseInt(ansM, 10);

    if (isNaN(N) || isNaN(M) || M < N) {
      console.log('Нужно ввести целые числа, где M ≥ N');
      rl.close();
      return;
    }

    const numbers = findSelfDividingNumbers(N, M);
    console.log(`\nЧисла из [${N}, ${M}], делящиеся на каждую свою цифру:`);
    console.log(numbers.join(', '));
    console.log(`\nВсего: ${numbers.length}`);

    rl.close();
  });
});