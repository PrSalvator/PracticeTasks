
let number0 = 0;
let number1 = 1;

let number = number0 + number1;

console.log(number0);
console.log(number1);

while(number <= 200){    
    console.log(number);
    number0 = number1;
    number1 = number;
    number = number0 + number1;
}