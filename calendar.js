const daysOfWeek = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',

  getCurrentDay() {
    return this[this.getCurrentDayNumber()];
  },

   //Возвращает номер текущего дня недели (1 — понедельник, ..., 7 — воскресенье).
  getCurrentDayNumber() {
    // JS: getDay() → 0 = воскресенье, 1 = понедельник, ..., 6 = суббота
    // Переводим в формат: 1 = понедельник, ..., 7 = воскресенье
    const jsDay = new Date().getDay();
    return jsDay === 0 ? 7 : jsDay;
  },
};

console.log(`Сегодня: ${daysOfWeek.getCurrentDay()}`);
console.log(`Номер дня: ${daysOfWeek.getCurrentDayNumber()}`);