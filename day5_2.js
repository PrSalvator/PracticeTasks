class MyString{
    Reverse(str){
        return [...str].reverse().join('');
    }
    
    UcFirst(str){
        return str.toUpperCase()[0] + str.slice(1, str.length);
    }

    WordFirst(str){
         let arr = str.split(' ');
         arr = arr.map(x => {
            if(x == '') return ' ';
            return this.UcFirst(x); 
        });
         return arr.join(' ');
    }
}
const myString = new MyString();

console.log(myString.Reverse('abcdefg'));
console.log(myString.UcFirst('abcdefg'));
console.log(myString.WordFirst('ab cd ef j'));