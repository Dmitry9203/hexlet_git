const readline = require('readline');

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

function reduce(num, den) {
  if (den === 0) throw new Error('Знаменатель не может быть нулём');
  if (den < 0) { num = -num; den = -den; }
  const g = gcd(num, den);
  return [num / g, den / g];
}

function format([num, den]) {
  return den === 1 ? `${num}` : `${num}/${den}`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите дроби в формате "a b c d" (a/b и c/d): ', (answer) => {
  const parts = answer.trim().split(/\s+/).map(Number);

  if (parts.length !== 4 || parts.some(isNaN)) {
    console.log('Нужно ровно 4 целых числа: a b c d');
    rl.close();
    return;
  }

  const [a, b, c, d] = parts;

  if (b === 0 || d === 0) {
    console.log('Знаменатели не могут быть нулями');
    rl.close();
    return;
  }

  const f1 = reduce(a, b);
  const f2 = reduce(c, d);

  const sum = reduce(f1[0] * f2[1] + f2[0] * f1[1], f1[1] * f2[1]);
  const diff = reduce(f1[0] * f2[1] - f2[0] * f1[1], f1[1] * f2[1]);

  console.log(`\n${format(f1)} + ${format(f2)} = ${format(sum)}`);
  console.log(`${format(f1)} - ${format(f2)} = ${format(diff)}`);

  rl.close();
});