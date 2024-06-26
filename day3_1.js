const arr = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];

console.log("Изначальный массив" , arr.join(' '));

const sortArr = selectionSort(arr);

console.log("Отсортированный массив" , sortArr.join(' '));

const target = 0;

console.log(`Индекс числа ${target} в массиве` , binarSearch(sortArr, target))

function binarSearch(inputArr, target){
    const _binarSearch = (start, end) => {
        const middle = Math.floor(start + (end-start)/2);
        if(middle == start) return undefined;
        if(target == inputArr[middle]) return middle;
        if(target > inputArr[middle]) return _binarSearch(middle, end);
        if(target < inputArr[middle]) return _binarSearch(start, middle);
    }
    return _binarSearch(0, inputArr.length);
}

function selectionSort(inputArr){

    const arr = [...inputArr];
    const length = arr.length;

    for(let i = 0; i < length; i++){

        let min = i;

        for(let j = i + 1; j < length; j++){
            if(arr[j] < arr[min]) min = j;
        }

        if(min != i){
            let minValue = arr[min];
            arr[min] = arr[i];
            arr[i] = minValue;
        }
    }

    return arr;
}