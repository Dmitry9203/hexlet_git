const subjects = {
  list: 'Математика, Русский, Информатика, История',

    //Добавляет предмет.
  addSubject(subject) {
    const array = this.list.split(',');
    const trimmed = array.map(item => item.trim());
    const exists = trimmed.some(
      item => item.toLowerCase() === subject.trim().toLowerCase()
    );

    if (exists) {
      return `Предмет «${subject}» уже есть в списке.`;
    }

    trimmed.push(subject.trim());

    this.list = trimmed.join(', ');

    return `Предмет «${subject}» добавлен.`;
  },

   //Удаляет предмет, если он есть в списке.
  removeSubject(subject) {
    const array = this.list.split(',');
    const trimmed = array.map(item => item.trim());
    const index = trimmed.findIndex(
      item => item.toLowerCase() === subject.trim().toLowerCase()
    );

    if (index === -1) {
      return `Предмета «${subject}» нет в списке.`;
    }

    trimmed.splice(index, 1);

    this.list = trimmed.join(', ');

    return `Предмет «${subject}» удалён.`;
  },


  show() {
    console.log('Предметы:', this.list);
  },
};

console.log('Начальный список:', subjects.list);

console.log(subjects.addSubject('Биология'));
console.log(subjects.addSubject('Математика')); 

console.log('\nПосле добавления:');
subjects.show();

console.log('\n' + subjects.removeSubject('Физика'));
console.log(subjects.removeSubject('Астрономия')); 
console.log('\nПосле удаления:');
subjects.show();