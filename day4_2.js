class Worker{
    constructor(name, surname, rate, days){
        this.Name = name;
        this.Surname = surname;
        this.Rate = rate
        this.Days = days;
    }

    GetSalary(){
        return this.Rate*this.Days;
    }
}

const worker = new Worker('Kirill', 'Leonov', 122, 30);

console.log(worker);
console.log(worker.GetSalary());