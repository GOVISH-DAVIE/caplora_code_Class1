var fNum = null;
class calculator {
    constructor() {
        this.number1 = 0
        this.number2 = 0
        this.sym = null
    }

    addNumbers(number) {
        if (this.sym !== null) {

            this.number2 = parseInt(this.number2.toString() + number)
            document.getElementById('number2').innerHTML = this.number2
        } else {
            this.number1 = parseInt(this.number1.toString() + number)
            document.getElementById('number1').innerHTML = this.number1
        }
        document.getElementById('symbol').innerHTML = this.sym

        // this.sym !== null ? this.number2 = parseInt(this.number2.toString() + number) :( this.number1 = parseInt(this.number1.toString() + number))


    }
    execute() {

        console.log(123);
        switch (this.sym) {
            case 'ádd':
                return this.add()
                break;
            case 'mod':
                return this.mod()
                break;
<<<<<<< HEAD

=======
            case 'subtract':
                return this.subtract()
                break;
            case 'division':
                return this.division()
                break;
            case 'multiplication':
                return this.multiplication()
                break;
>>>>>>> upstream/main
            default:
                return 'érror'
                break;
        }
    }
    addsymbol(sym) {
<<<<<<< HEAD
        this.sym = sym
=======
        sym == 'clear' ? this.clear() : this.sym = sym
        
                
        document.getElementById('symbol').innerHTML = this.sym
>>>>>>> upstream/main
    }
    add() {
        return this.number1 + this.number2
    }
    mod() {
        return this.number1 % this.number2;
    }
<<<<<<< HEAD
=======
    subtract() {
        return this.number1 - this.number2;
    }
    division() {
        return this.number1 / this.number2;
    }
    multiplication() {
        return this.number1 * this.number2;
    }
    clear() {
        console.log(12);
        this.number1 = 0
        this.number2 = 0
        this.sym = null

        document.getElementById('number1').innerHTML = this.number1

        document.getElementById('number2').innerHTML = this.number2

        document.getElementById('symbol').innerHTML = this.sym

        document.getElementById('result').innerHTML = 0
    }
>>>>>>> upstream/main
}
let calc = new calculator();

function handlenumberPad(params) {
    calc.addNumbers(params)
    console.log(calc.number1, calc.number2);
}
function handlesym(params) {
    calc.addsymbol(params)
    console.log(calc.sym)
}
let execute = () => {
<<<<<<< HEAD
    console.log(calc.execute())
}
=======
    document.getElementById('result').innerHTML = calc.execute()
    console.log(calc.execute())
}
let result = () => {
    return execute
}

>>>>>>> upstream/main
