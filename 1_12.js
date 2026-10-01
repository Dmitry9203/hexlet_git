
//НОД двух чисел (алгоритм Евклида).
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

//Сокращает дробь [num, den] и приводит знак к числителю.
function reduce(num, den) {
  if (den === 0) throw new Error('Знаменатель не может быть нулём');

  // Знак всегда в числителе
  if (den < 0) {
    num = -num;
    den = -den;
  }

  const g = gcd(num, den);
  return [num / g, den / g];
}

//Умножение: a/b * c/d = (a*c) / (b*d)
function multiply([a, b], [c, d]) {
  return reduce(a * c, b * d);
}

//Деление: a/b ÷ c/d = (a*d) / (b*c)
function divide([a, b], [c, d]) {
  if (c === 0) throw new Error('Деление на ноль');
  return reduce(a * d, b * c);
}

function formatFraction([num, den]) {
  if (den === 1) return `${num}`;
  return `${num}/${den}`;
}


const f1 = [3, 4];
const f2 = [5, 6];  

console.log(`${formatFraction(f1)} * ${formatFraction(f2)} = ${formatFraction(multiply(f1, f2))}`);
console.log(`${formatFraction(f1)} / ${formatFraction(f2)} = ${formatFraction(divide(f1, f2))}`);