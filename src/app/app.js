var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.result = '';
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.previous_operator = false;
    }
    AppComponent.prototype.addToCalculation = function (value) {
        if (this.clear == true) {
            this.result = '';
            this.clear = false;
        }
        if (value == '.') {
            if (this.decimal == true) {
                return false;
            }
            this.decimal = true;
        }
        this.result += value;
    };
    AppComponent.prototype.calculate = function (operator) {
        this.total.push(this.result);
        this.result = '';
        if (this.total.length == 2) {
            var a = Number(this.total[0]);
            var b = Number(this.total[1]);
            if (this.previous_operator == '+') {
                var total = a + b;
            }
            else if (this.previous_operator == '-') {
                var total = a - b;
            }
            else if (this.previous_operator == '*') {
                var total = a * b;
            }
            else {
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
    };
    AppComponent.prototype.getTotal = function () {
        var a = Number(this.total[0]);
        var b = Number(this.result);
        if (this.previous_operator == '+') {
            var total = a + b;
        }
        else if (this.previous_operator == '-') {
            var total = a - b;
        }
        else if (this.previous_operator == '*') {
            var total = a * b;
        }
        else {
            var total = a / b;
        }
        if (isNaN(total)) {
            return false;
        }
        this.result = total;
        this.total = [];
        this.clear = true;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n            <div class=\"calculator\">\n\n                <div class=\"result\">\n                    {{ result }}\n                </div>\n\n                <button (click)=\"addToCalculation('7')\">7</button>\n                <button (click)=\"addToCalculation('8')\">8</button>\n                <button (click)=\"addToCalculation('9')\">9</button>\n                <button (click)=\"calculate('/')\">/</button>\n\n                <button (click)=\"addToCalculation('4')\">4</button>\n                <button (click)=\"addToCalculation('5')\">5</button>\n                <button (click)=\"addToCalculation('6')\">6</button>\n                <button (click)=\"calculate('*')\">X</button>\n\n                <button (click)=\"addToCalculation('1')\">1</button>\n                <button (click)=\"addToCalculation('2')\">2</button>\n                <button (click)=\"addToCalculation('3')\">3</button>\n                <button (click)=\"calculate('-')\">-</button>\n\n                <button (click)=\"addToCalculation('0')\">0</button>\n                <button (click)=\"addToCalculation('.')\">.</button>\n                <button (click)=\"getTotal()\">=</button>\n                <button (click)=\"calculate('+')\">+</button>\n            </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map