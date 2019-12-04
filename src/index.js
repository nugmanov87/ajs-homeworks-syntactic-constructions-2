import findBy from '../app.js';

const finder = findBy('name', 'урон');
const massiv = [
  {
    name: 'маг',
    type: 'character',
    description: 'Персонаж, обладающий магическими способностями',
  },
  {
    name: 'заклинание',
    type: 'attack',
    description: 'Атака магическим заклинанием',
  },
  {
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  },
];

console.log(massiv.filter(finder));

// TODO: write your code in app.js
