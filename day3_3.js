const arr =  [[1,4,5],[1,3,4],[2,6]];
const newArr = arr.flat(Infinity);


print(arr);
console.log(newArr.join(' '));
console.log(newArr.sort().join(' '));


function print(arr){
    const length = arr.length;

    for(let i=0; i < length; i++){
        console.log(arr[i].join(' '));
    }
}