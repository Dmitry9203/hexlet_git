const readline = require('readline');

function isPerfect(n) {
  if (n < 2) return false;
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      const pair = n / i;
      if (pair !== i) sum += pair;
    }
  }
  return sum === n;
}

function firstPerfectNumbers(count) {
  const result = [];
  let candidate = 2;
  while (result.length < count) {
    if (isPerfect(candidate)) result.push(candidate);
    candidate++;
  }
  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Сколько первых совершенных чисел вывести? N = ', (answer) => {
  const N = parseInt(answer, 10);

  if (isNaN(N) || N < 1 || N >= 5) {
    console.log('N должно быть целым числом от 1 до 4');
    rl.close();
    return;
  }

  const perfect = firstPerfectNumbers(N);
  console.log(`\nПервые ${N} совершенных чисел:`);
  perfect.forEach((num, i) => {
    console.log(`${i + 1}) ${num}`);
  });

  rl.close();
});