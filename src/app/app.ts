import {Component, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: `
            <div class="calculator">

                <div class="result">
                    {{ result }}
                </div>

                <button (click)="addToCalculation('7')">7</button>
                <button (click)="addToCalculation('8')">8</button>
                <button (click)="addToCalculation('9')">9</button>
                <button (click)="calculate('/')">/</button>

                <button (click)="addToCalculation('4')">4</button>
                <button (click)="addToCalculation('5')">5</button>
                <button (click)="addToCalculation('6')">6</button>
                <button (click)="calculate('*')">X</button>

                <button (click)="addToCalculation('1')">1</button>
                <button (click)="addToCalculation('2')">2</button>
                <button (click)="addToCalculation('3')">3</button>
                <button (click)="calculate('-')">-</button>

                <button (click)="addToCalculation('0')">0</button>
                <button (click)="addToCalculation('.')">.</button>
                <button (click)="getTotal()">=</button>
                <button (click)="calculate('+')">+</button>
            </div>
    `
})

class AppComponent {

    result: number;
    value: any;
    decimal: boolean;
    answer: number;
    total: Array<number>;
    clear: boolean;
    previous_operator: any;

    constructor() {
        this.result ='';
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.previous_operator = false;
    }

    addToCalculation(value) {

        if(this.clear == true) {
            this.result = '';
            this.clear = false;
        }

        if(value == '.') {

            if(this.decimal == true) {
                return false;
            }

            this.decimal = true;

        }

        this.result += value;

    }

    calculate(operator) {

        this.total.push(this.result);
        this.result = '';

        if(this.total.length == 2) {
            var a = Number(this.total[0]);
            var b = Number(this.total[1]);

            if(this.previous_operator == '+') {
                var total = a + b;
            } else if(this.previous_operator == '-') {
                var total = a - b;
            } else if(this.previous_operator == '*') {
                var total = a * b;
            } else {
                var total = a / b;
            }
            var answer = total;

            this.total = [];
            this.total.push(answer);
            this.result = total;
            this.clear = true;
        }
        else {
            this.clear = false;
        }

        this.decimal = false;
        this.previous_operator = operator;

    }

    getTotal() {
        var a = Number(this.total[0]);
        var b = Number(this.result);

        if(this.previous_operator == '+') {
            var total = a + b;
        } else if(this.previous_operator == '-') {
            var total = a - b;
        } else if(this.previous_operator == '*') {
            var total = a * b;
        } else {
            var total = a / b;
        }

        if(isNaN(total)) {
            return false;
        }

        this.result = total;
        this.total = [];
        this.clear = true;
    }
}
bootstrap(AppComponent);