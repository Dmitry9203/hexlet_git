function kebabToSnakeCase(str) {
  const parts = str.split('-'); 

  return parts.reduce((acc, word, index) => {
    if (index === 0) return word;
    if (word.length === 0) return acc;
    return acc + word.at(0).toUpperCase() + word.slice(1);
  }, '');
}

console.log(kebabToSnakeCase('background-color')); 
console.log(kebabToSnakeCase('font-size'));         