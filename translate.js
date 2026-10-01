const ruEn = {
  'привет': 'hello',
  'мир':    'world',
  'кот':    'cat',
  'собака': 'dog',
};

function translate(text, dict) {
  return text
    .split(' ')
    .map(word => dict[word.toLowerCase()] || word)
    .join(' ');
}

console.log(translate('привет мир кот собака', ruEn));
