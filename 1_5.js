const readline = require('readline');

function findDivisors(n) {
  if (n < 1 || !Number.isInteger(n)) return [];

  const divisors = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите натуральное число N: ', (answer) => {
  const N = parseInt(answer, 10);

  if (isNaN(N) || N < 1) {
    console.log('Нужно ввести натуральное число (≥ 1)');
    rl.close();
    return;
  }

  const divisors = findDivisors(N);
  console.log(`Делители числа ${N}:`);
  console.log(divisors.join(', '));
  console.log(`Всего делителей: ${divisors.length}`);

  rl.close();
});