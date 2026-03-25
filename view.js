class CalculatorView {
    constructor() {
        this.expressionEl = document.getElementById("expression");
        this.resultEl = document.getElementById("result");
    }

    update(expression, result) {
        this.expressionEl.textContent = expression;
        this.resultEl.textContent = result;
    }
}
