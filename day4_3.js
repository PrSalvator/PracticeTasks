class Worker{
    constructor(name, surname, rate, days){
        this.Name = name;
        this.Surname = surname;
        this.Rate = rate
        this.Days = days;
    }

    get Name(){
        return this._name;
    }

    set Name(value){
        this._name = value;
    }

    get Surname(){
        return this._surname;
    }

    set Surname(value){
        this._surname = value;
    }

    get Rate(){
        return this._rate;
    }
    
    set Rate(value){
        this._rate = value;
    }

    get Days(){
        return this._days;
    }

    set Days(value){
        this._days = value;
    }

    GetSalary(){
        return this._rate*this._days;
    }
}

const worker = new Worker('Kirill', 'Leonov', 122, 30);

console.log(worker);
console.log(worker.GetSalary());