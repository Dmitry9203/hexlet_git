
//(2N)!! = 2 * 4 * ... * (2N)
function doubleFactorialEven(N) {
  let result = 1;
  for (let i = 2; i <= 2 * N; i += 2) {
    result *= i;
  }
  return result;
}


//(2N+1)!! = 1 * 3 * ... * (2N+1)

function doubleFactorialOdd(N) {
  let result = 1;
  for (let i = 1; i <= 2 * N + 1; i += 2) {
    result *= i;
  }
  return result;
}

console.log('Чётный случай (2N)!!:');
for (let N = 0; N <= 5; N++) {
  console.log(`(2·${N})!! = ${doubleFactorialEven(N)}`);
}

console.log('\nНечётный случай (2N+1)!!:');
for (let N = 0; N <= 5; N++) {
  console.log(`(2·${N}+1)!! = ${doubleFactorialOdd(N)}`);
}