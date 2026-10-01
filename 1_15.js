const readline = require('readline');

function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isDivisibleByDigitSum(n) {
  if (n <= 0) return false;
  const sum = digitSum(n);
  return sum !== 0 && n % sum === 0;
}

function findDivisibleByDigitSum(N, M) {
  const result = [];
  for (let n = N; n <= M; n++) {
    if (isDivisibleByDigitSum(n)) result.push(n);
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

    const numbers = findDivisibleByDigitSum(N, M);
    console.log(`\nЧисла из [${N}, ${M}], делящиеся на сумму своих цифр:`);
    console.log(numbers.join(', '));
    console.log(`\nВсего: ${numbers.length}`);

    rl.close();
  });
});