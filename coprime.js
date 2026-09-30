const readline = require("readline");

function gcd(a, b) {
	while (b !== 0) {
		[a, b] = [b, a % b];
	}

	return a;
}

function areCoprime(a, b) {
	return gcd(a, b) === 1;
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Введите первое натуральное число: ", (a) => {
	rl.question("Введите второе натуралное число: ", (b) => {
		const x = parseInt(a, 10);
		const y = parseInt(b, 10);

		if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
			console.log(`Ошибка: оба числа должны быть натуральными (> 0).`);
		} else if (areCoprime(x, y)) {
			console.log(`Числа ${x} и ${y} взаимно просты.`);
		} else {
			console.log(`Числа ${x} и ${y} не взаимно просты.`);
		}

		rl.close();
	});
});
