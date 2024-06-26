class Calculation{
    _calculationLine = "";

    set CalculationLine(str){
        this._calculationLine = str;
    }

    get CalculationLine(){
        return this._calculationLine;
    }

    SetLastSymbolCalculationLine(symbol){
        this._calculationLine += symbol;
    }

    LastSybmol(){
        return this._calculationLine.at(-1);
    }

    DeleteLastSymbol(){
        this._calculationLine = this._calculationLine.slice(0, -1);
    }
}

const calculation = new Calculation();

calculation.CalculationLine = 'abcdefg';

console.log(calculation.CalculationLine);

calculation.SetLastSymbolCalculationLine('5');

console.log(calculation.CalculationLine);

console.log(calculation.LastSybmol());

calculation.DeleteLastSymbol();

console.log(calculation.CalculationLine);