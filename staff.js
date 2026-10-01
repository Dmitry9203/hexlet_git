const staff = {
  'Директор':  'Иванов Иван Иванович',
  'Бухгалтер': 'Петрова Анна Сергеевна',
  'Менеджер':  'Сидоров Пётр Алексеевич',
  'Курьер':    'Кузнецов Дмитрий Олегович',
};

const staff2 = { ...staff };

staff2['Директор']  = 'Смирнов Петр Петрович';
staff2['Бухгалтер'] = 'Волкова Мария Ивановна';
staff2['Менеджер']  = 'Морозов Сергей Сергеевич';
staff2['Курьер']    = 'Новикова Влада Владимировна';

function objectToString(obj) {
  return Object.entries(obj)
    .map(([position, name]) => `${position}: ${name}`)
    .join('\n');
}

console.log('Персонал 1');
console.log(objectToString(staff));

console.log('\nПерсонал 2');
console.log(objectToString(staff2));