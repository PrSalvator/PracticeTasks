const str = 'DDADSADASDAAADS';

const letters = [];

for(let i=0; i < str.length; i++){
    const letter = str[i];
    if(!letters.find(x => x == letter)) letters.push(letter);
}

console.log(letters.join(''));