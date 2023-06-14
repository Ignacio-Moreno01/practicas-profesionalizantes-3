class calculatorView
{
    constructor()
    {
        this.document = document;
        this.display = this.document.createElement("input");
        this.display.id = "display";
        this.display.type = "text";
        this.display.placeholder = "0";
        this.display.readOnly = true;
        this.document.body.appendChild(this.display);

        //Salto de linea
        this.jump1 = document.createElement("br");
        this.document.body.appendChild(this.jump1);

        this.btn1 = document.createElement("button");
        this.btn1.textContent = "1";
        this.btn1.classList.add('numbers');
        this.document.body.appendChild(this.btn1);

        this.btn2 = document.createElement("button");
        this.btn2.textContent = "2";
        this.btn2.classList.add('numbers');
        this.document.body.appendChild(this.btn2);

        this.btn3 = document.createElement("button");
        this.btn3.textContent = "3";
        this.btn3.classList.add('numbers');
        this.document.body.appendChild(this.btn3);

        this.btnPlus = document.createElement("button");
        this.btnPlus.textContent = "+";
        this.btnPlus.classList.add('operations');
        this.document.body.appendChild(this.btnPlus);

        //Salto de linea
        this.jump2 = document.createElement("br");
        this.document.body.appendChild(this.jump2);

        this.btn4 = document.createElement("button");
        this.btn4.textContent = "4";
        this.btn4.classList.add('numbers');
        this.document.body.appendChild(this.btn4);

        this.btn5 = document.createElement("button");
        this.btn5.textContent = "5";
        this.btn5.classList.add('numbers');
        this.document.body.appendChild(this.btn5);

        this.btn6 = document.createElement("button");
        this.btn6.textContent = "6";
        this.btn6.classList.add('numbers');
        this.document.body.appendChild(this.btn6);

        this.btnSubstract = document.createElement("button");
        this.btnSubstract.textContent = "-";
        this.btnSubstract.classList.add('operations');
        this.document.body.appendChild(this.btnSubstract);

        //Salto de linea
        this.jump3 = document.createElement("br");
        this.document.body.appendChild(this.jump3);

        this.btn7 = document.createElement("button");
        this.btn7.textContent = "7";
        this.btn7.classList.add('numbers');
        this.document.body.appendChild(this.btn7);

        this.btn8 = document.createElement("button");
        this.btn8.textContent = "8";
        this.btn8.classList.add('numbers');
        this.document.body.appendChild(this.btn8);

        this.btn9 = document.createElement("button");
        this.btn9.textContent = "9";
        this.btn9.classList.add('numbers');
        this.document.body.appendChild(this.btn9);

        this.btnMultiply = document.createElement("button");
        this.btnMultiply.textContent = "*";
        this.btnMultiply.classList.add('operations');
        this.document.body.appendChild(this.btnMultiply);

        //Salto de linea
        this.jump4 = document.createElement("br");
        this.document.body.appendChild(this.jump4);

        this.btn0 = document.createElement("button");
        this.btn0.textContent = "0";
        this.btn0.classList.add('numbers');
        this.document.body.appendChild(this.btn0);

        this.btnPoint = document.createElement("button");
        this.btnPoint.textContent = ".";
        this.btnPoint.classList.add('numbers');
        this.document.body.appendChild(this.btnPoint);

        this.btnCalculate = document.createElement("button");
        this.btnCalculate.textContent = "=";
        this.btnCalculate.classList.add('operations');
        this.document.body.appendChild(this.btnCalculate);

        this.btnDivide = document.createElement("button");
        this.btnDivide.textContent = "/";
        this.btnDivide.classList.add('operations');
        this.document.body.appendChild(this.btnDivide);

        //Salto de linea
        this.jump5 = document.createElement("br");
        this.document.body.appendChild(this.jump5);

        this.btnC = this.document.createElement("button");
        this.btnC.id = "btnC";
        this.btnC.Text = "BORRAR";
        this.btnC.textContent = "BORRAR";
        this.document.body.appendChild(this.btnC);
    }
}

export { calculatorView };