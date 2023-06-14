//------------------------VIEW---------------------------//

class view 
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


//------------------------CONTROLLER---------------------------//

class controller 
{
    constructor(viewReference, modelReference) 
    {
        this.view = viewReference;
        this.model = modelReference;

        this.view.btn1.addEventListener("click", () => {
        this.onbtn1click();
        });
        this.view.btn2.addEventListener("click", () => {
        this.onbtn2click();
        });
        this.view.btn3.addEventListener("click", () => {
        this.onbtn3click();
        });
        this.view.btnPlus.addEventListener("click", () => {
        this.onbtnPlusclick();
        });
        this.view.btn4.addEventListener("click", () => {
        this.onbtn4click();
        });
        this.view.btn5.addEventListener("click", () => {
        this.onbtn5click();
        });
        this.view.btn6.addEventListener("click", () => {
        this.onbtn6click();
        });
        this.view.btnSubstract.addEventListener("click", () => {
        this.onbtnSubstractclick();
        });
        this.view.btn7.addEventListener("click", () => {
        this.onbtn7click();
        });
        this.view.btn8.addEventListener("click", () => {
        this.onbtn8click();
        });
        this.view.btn9.addEventListener("click", () => {
        this.onbtn9click();
        });
        this.view.btnMultiply.addEventListener("click", () => {
        this.onbtnMultiplyclick();
        });
        this.view.btn0.addEventListener("click", () => {
        this.onbtn0bclick();
        });
        this.view.btnPoint.addEventListener("click", () => {
        this.onbtnPointclick();
        });
        this.view.btnCalculate.addEventListener("click", () => {
        this.onbtnCalculateclick();
        });
        this.view.btnDivide.addEventListener("click", () => {
        this.onbtnDivideclick();
        });
        this.view.btnC.addEventListener("click", () => {
        this.onbtnCclick();
        });
    }

    onbtn1click(event) {
        this.view.display.value += "1";
    }

    onbtn2click(event) {
        this.view.display.value += "2";
    }

    onbtn3click(event) {
        this.view.display.value += "3";
    }

    onbtn4click(event) {
        this.view.display.value += "4";
    }

    onbtn5click(event) {
        this.view.display.value += "5";
    }

    onbtn6click(event) {
        this.view.display.value += "6";
    }

    onbtn7click(event) {
        this.view.display.value += "7";
    }

    onbtn8click(event) {
        this.view.display.value += "8";
    }

    onbtn9click(event) {
        this.view.display.value += "9";
    }

    onbtn0bclick(event) {
        this.view.display.value += "0";
    }

    onbtnPointclick(event) {
        this.view.display.value += ".";
    }

    onbtnCalculateclick(event) {
        try {
            const resultado = eval(document.getElementById("display").value);
            this.view.display.value = resultado;
        } catch (error) {
            alert("Error: " + error.message);
        }
    }

    onbtnPlusclick(event) {
        this.view.display.value += "+";
    }

    onbtnSubstractclick(event) {
        this.view.display.value += "-";
    }

    onbtnMultiplyclick(event) {
        this.view.display.value += "*";
    }

    onbtnDivideclick(event) {
        this.view.display.value += "/";
    }

    onbtnCclick(event) {
        this.view.display.value = "";
    }
}


//------------------------MODEL---------------------------//

class model 
{
    constructor(){}

    evaluateExpression(expression) {
        try {
            return eval(expression);
        } catch (error) {
            throw new Error("Error al evaluar la expresión: " + error.message);
        }
    }
}


//------------------------Calculator---------------------------//

class calculator 
{
    constructor() 
    {
        this.view = new view();
        this.model = new model();
        this.controller = new controller(this.view, this.model);
    }
}


//------------------------MAIN---------------------------//

function main() 
{
    let myCalculator = new calculator();
}

window.addEventListener("load", main);