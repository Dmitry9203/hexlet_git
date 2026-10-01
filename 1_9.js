const readline = require('readline');

function isPerfectSquare(x) {
  if (x < 0) return false;
  const r = Math.round(Math.sqrt(x));
  return r * r === x;
}

function isFibonacci(n) {
  if (n < 0 || !Number.isInteger(n)) return false;
  if (n === 0 || n === 1) return true;

  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите число для проверки: ', (answer) => {
  const n = parseInt(answer, 10);

  if (isNaN(n) || n < 0) {
    console.log('Нужно ввести целое неотрицательное число');
    rl.close();
    return;
  }

  console.log(`${n} — ${isFibonacci(n) ? 'число Фибоначчи' : 'НЕ число Фибоначчи'}`);
  rl.close();
});