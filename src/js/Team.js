export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    // Проверка, есть ли уже такой персонаж
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен в команду');
    }
    
    this.members.add(character);
  }

  addAll(...characters) {
    // Добавляем всех персонажей без генерации ошибок
    characters.forEach(character => {
      this.members.add(character);
    });
  }

  toArray() {
    // Преобразуем Set в массив
    return [...this.members];
  }
}
