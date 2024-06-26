const arr = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
const strArr = ['one', 'two', 'three'];
const sortArr = bubbleSort(arr);
const concatArr = [...sortArr];

concatArr.push(...strArr);

console.log("Начальный массив", arr.join(' '));
console.log("Отсортированный массив", sortArr.join(' '));
console.log("Склеенный массив", concatArr.join(' '));

function bubbleSort(inputArr){
    const arr = [...inputArr];
    const length = arr.length - 1;

    for(let i = 0; i < length; i++){
        let _lenght = length - i;

        for(let j = 0; j < _lenght; j++){
            if(arr[j] > arr[j+1]){
                let max = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = max;
            }
        }
    }

    return arr;
}