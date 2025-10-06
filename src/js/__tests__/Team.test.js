import Team from '../Team';

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('should create empty team', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('should add character to team', () => {
    const character = { name: 'Лучник', health: 50 };
    team.add(character);
    
    expect(team.members.has(character)).toBe(true);
    expect(team.members.size).toBe(1);
  });

  test('should throw error when adding duplicate character', () => {
    const character = { name: 'Лучник', health: 50 };
    team.add(character);
    
    // Проверяем, что выбрасывается ошибка
    expect(() => {
      team.add(character);
    }).toThrow('Персонаж уже добавлен в команду');
  });

  test('should add multiple characters with addAll', () => {
    const char1 = { name: 'Лучник', health: 50 };
    const char2 = { name: 'Мечник', health: 80 };
    const char3 = { name: 'Маг', health: 30 };
    
    team.addAll(char1, char2, char3);
    
    expect(team.members.size).toBe(3);
    expect(team.members.has(char1)).toBe(true);
    expect(team.members.has(char2)).toBe(true);
    expect(team.members.has(char3)).toBe(true);
  });

  test('should not add duplicate with addAll', () => {
    const char1 = { name: 'Лучник', health: 50 };
    
    team.addAll(char1, char1, char1);
    
    // Set автоматически игнорирует дубликаты
    expect(team.members.size).toBe(1);
  });

  test('should not throw error when addAll with duplicates', () => {
    const char1 = { name: 'Лучник', health: 50 };
    
    // Не должно быть ошибки
    expect(() => {
      team.addAll(char1, char1);
    }).not.toThrow();
  });

  test('should convert Set to array', () => {
    const char1 = { name: 'Лучник', health: 50 };
    const char2 = { name: 'Мечник', health: 80 };
    
    team.add(char1);
    team.add(char2);
    
    const array = team.toArray();
    
    expect(Array.isArray(array)).toBe(true);
    expect(array.length).toBe(2);
    expect(array).toContain(char1);
    expect(array).toContain(char2);
  });
});
