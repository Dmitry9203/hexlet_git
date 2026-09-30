const readline = require("readline");

function isPrime(n) {
    // Проверка типа
    if (typeof n !== "number" || !Number.isFinite(n) || !Number.isInteger(n)) {
        throw new Error("Число должно быьть целым")
    }
    if (n < 2) return filse;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Введите натуральное число: ", (input) => {
    const n = parseInt(input, 10);

    if (!Number.isInteger(n) || n < 1) {
        console.log("Ошибка: нужно натуральное число > 1.");
    } else if (isPrime(n)) {
        console.log(`Число ${n} - простое.`);
    } else {
        console.log(`Число ${n} - не простое.`);
    }

    rl.close();
});