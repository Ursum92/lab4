class CalculatorModel {
    constructor() {
        this.reset();
    }

    reset() {
        this.operand1 = "";
        this.operand2 = "";
        this.operator = "";
        this.displayValue = "";
    }

    appendDigit(digit) {
        this.displayValue += digit;

        if (!this.operator) {
            this.operand1 += digit;
        } else {
            this.operand2 += digit;
        }
    }

    setOperator(op) {
        if (this.operand1 === "") return;

        if (this.operator && this.operand2) {
            this.calculate();
        }

        this.operator = op;
        this.displayValue += " " + op + " ";
    }

    calculate() {
        const a = Number(this.operand1);
        const b = Number(this.operand2);

        if (this.operator === "/" && b === 0) {
            this.displayValue = "Eroare: Împărțire la zero";
            return;
        }

        let result = 0;

        switch (this.operator) {
            case "+": result = a + b; break;
            case "-": result = a - b; break;
            case "*": result = a * b; break;
            case "/": result = a / b; break;
        }

        this.displayValue = result.toString();
        this.operand1 = result.toString();
        this.operand2 = "";
        this.operator = "";
    }
}
