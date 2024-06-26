const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(map(obj));

function map(obj){
    const arr = [];

    for(key in obj){
        arr.push([key, obj[key]]);
    }

    return arr;
}