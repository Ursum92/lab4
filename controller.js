class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.initButtons();
        this.updateView();
    }

    initButtons() {
        document.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                const value = btn.dataset.value;
                const action = btn.dataset.action;

                if (value) {
                    if ("0123456789".includes(value)) {
                        this.model.appendDigit(value);
                    } else {
                        this.model.setOperator(value);
                    }
                }

                if (action === "clear") {
                    this.model.reset();
                }

                if (action === "equals") {
                    this.model.calculate();
                }

                this.updateView();
            });
        });
    }

    updateView() {
        this.view.update(
            this.model.displayValue,
            this.model.operator ? "" : this.model.displayValue
        );
    }
}

const app = new CalculatorController(
    new CalculatorModel(),
    new CalculatorView()
);
