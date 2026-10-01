const original = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const copy1 = [...original];
const copy2 = original.slice();

copy1.reverse();

const reversed2 = [];
for (let i = copy2.length - 1; i >= 0; i--) {
  reversed2.push(copy2[i]);
}

console.log('Исходный массив:      ', original);
console.log('Копия 1 (spread + reverse):', copy1);
console.log('Копия 2 (slice + цикл):    ', reversed2);