class calculatorController
{
	constructor(viewReference, modelReference)
	{
		this.calculatorView = viewReference;
        this.calculatorModel = modelReference;

        this.calculatorView.btn1.addEventListener("click", () => {
        this.onbtn1click();
        });
        this.calculatorView.btn2.addEventListener("click", () => {
        this.onbtn2click();
        });
        this.calculatorView.btn3.addEventListener("click", () => {
        this.onbtn3click();
        });
        this.calculatorView.btnPlus.addEventListener("click", () => {
        this.onbtnPlusclick();
        });
        this.calculatorView.btn4.addEventListener("click", () => {
        this.onbtn4click();
        });
        this.calculatorView.btn5.addEventListener("click", () => {
        this.onbtn5click();
        });
        this.calculatorView.btn6.addEventListener("click", () => {
        this.onbtn6click();
        });
        this.calculatorView.btnSubstract.addEventListener("click", () => {
        this.onbtnSubstractclick();
        });
        this.calculatorView.btn7.addEventListener("click", () => {
        this.onbtn7click();
        });
        this.calculatorView.btn8.addEventListener("click", () => {
        this.onbtn8click();
        });
        this.calculatorView.btn9.addEventListener("click", () => {
        this.onbtn9click();
        });
        this.calculatorView.btnMultiply.addEventListener("click", () => {
        this.onbtnMultiplyclick();
        });
        this.calculatorView.btn0.addEventListener("click", () => {
        this.onbtn0bclick();
        });
        this.calculatorView.btnPoint.addEventListener("click", () => {
        this.onbtnPointclick();
        });
        this.calculatorView.btnCalculate.addEventListener("click", () => {
        this.onbtnCalculateclick();
        });
        this.calculatorView.btnDivide.addEventListener("click", () => {
        this.onbtnDivideclick();
        });
        this.calculatorView.btnC.addEventListener("click", () => {
        this.onbtnCclick();
        });
	}

	onbtn1click(event) {
        this.calculatorView.display.value += "1";
    }

    onbtn2click(event) {
        this.calculatorView.display.value += "2";
    }

    onbtn3click(event) {
        this.calculatorView.display.value += "3";
    }

    onbtn4click(event) {
        this.calculatorView.display.value += "4";
    }

    onbtn5click(event) {
        this.calculatorView.display.value += "5";
    }

    onbtn6click(event) {
        this.calculatorView.display.value += "6";
    }

    onbtn7click(event) {
        this.calculatorView.display.value += "7";
    }

    onbtn8click(event) {
        this.calculatorView.display.value += "8";
    }

    onbtn9click(event) {
        this.calculatorView.display.value += "9";
    }

    onbtn0bclick(event) {
        this.calculatorView.display.value += "0";
    }

    onbtnPointclick(event) {
        this.calculatorView.display.value += ".";
    }

    onbtnCalculateclick(event) {
        try {
            const resultado = eval(document.getElementById("display").value);
            this.calculatorView.display.value = resultado;
        } catch (error) {
            alert("Error: " + error.message);
        }
    }

    onbtnPlusclick(event) {
        this.calculatorView.display.value += "+";
    }

    onbtnSubstractclick(event) {
        this.calculatorView.display.value += "-";
    }

    onbtnMultiplyclick(event) {
        this.calculatorView.display.value += "*";
    }

    onbtnDivideclick(event) {
        this.calculatorView.display.value += "/";
    }

    onbtnCclick(event) {
        this.calculatorView.display.value = "";
    }
}

export { calculatorController };