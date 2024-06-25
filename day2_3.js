const seasons = ["Зима", "Весна", "Лето", "Осень", "Зима"];

const month = randomInteger(1, 12);
const year = randomInteger(1999, 2024);

console.log(`${month} - ${seasons[Math.floor(month / 3)]}`);

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }