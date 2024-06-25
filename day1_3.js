const strArr = ['дим', 'манек', 'рота'];

strArr.forEach(str => {
    console.log( str + reverse(str.slice(0, -1)) );
})

function reverse(str){
    return str.split('').reverse().join('');
}