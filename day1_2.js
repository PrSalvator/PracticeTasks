const str = 'hello alexandr!';

const strArr = str.split(' ');

let result = '';

strArr.forEach(x => {
    const firstLetter = x[0];
    result += firstLetter.repeat(x.length);
    result += " ";
})

console.log(result.trim());