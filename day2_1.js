for(let number = 2; number <= 100; number++){
    if(isSimple(number)) console.log(number);
}


function isSimple(number){
    const sqrt = Math.sqrt(number);
    for(let i = 2; i <= sqrt; i++){
        if(number % i == 0) return false;
    }
    return true;
}