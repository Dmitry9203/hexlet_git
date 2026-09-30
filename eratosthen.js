const readline = require('readline');

function sieveOfEratosthenes(n) {
    if (n < 2) return []; // Простых чисел меньше 2 не существует

    // Создаём массив isPrime длины n+1.
    const isPrime = new Array(n + 1).fill(true);
    // 0 и 1 не являются простыми числами
    isPrime[0] = false;
    isPrime[1] = false;

    const limit = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
        // Вычёркиваем все кратные i, начиная с i*i:
        for (let j = i * i; j <= n; j += i) {
            isPrime[j] = false;
        }
        }
    }

    // Собираем все индексы, у которых isPrime осталось true
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }

    return primes;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите N: ', (answer) => {    
    const N = parseInt(answer, 10);

    if (isNaN(N) || N < 2) {
        console.log('Нужно ввести целое число >= 2');
        rl.close();
        return;
    }

    const primes = sieveOfEratosthenes(N);

    console.log(`Простые числа от 1 до ${N}:`);
    console.log(primes.join(', '));
    rl.close();
});