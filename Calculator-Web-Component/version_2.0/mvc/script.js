//------------------------VIEW---------------------------//

class view
{
    constructor()
    {
        //Elementos
        this.display = document.createElement('input');
        this.display.type = 'text';
        this.display.setAttribute('disabled','');
        this.display.value = '';
        this.display.classList.add('displayResult');

        this.btnOne = document.createElement("button");
        this.btnOne.innerText = '1';
        this.btnOne.classList.add('numbers');

        this.btnTwo = document.createElement("button");
        this.btnTwo.innerText = '2';
        this.btnTwo.classList.add('numbers');

        this.btnThree = document.createElement("button");
        this.btnThree.innerText = '3';
        this.btnThree.classList.add('numbers');

        this.btnPlus = document.createElement("button");
        this.btnPlus.innerText = '+';
        this.btnPlus.classList.add('operation');

        this.btnFour = document.createElement("button");
        this.btnFour.innerText = '4';
        this.btnFour.classList.add('numbers');

        this.btnFive = document.createElement("button");
        this.btnFive.innerText = '5';
        this.btnFive.classList.add('numbers');

        this.btnSix = document.createElement("button");
        this.btnSix.innerText = '6';
        this.btnSix.classList.add('numbers');

        this.btnRest = document.createElement("button");
        this.btnRest.innerText = '-';
        this.btnRest.classList.add('operation');

        this.btnSeven = document.createElement("button");
        this.btnSeven.innerText = '7';
        this.btnSeven.classList.add('numbers');

        this.btnEight = document.createElement("button");
        this.btnEight.innerText = '8';
        this.btnEight.classList.add('numbers');

        this.btnNine = document.createElement("button");
        this.btnNine.innerText = '9';
        this.btnNine.classList.add('numbers');

        this.btnMultiply = document.createElement("button");
        this.btnMultiply.innerText = '*';
        this.btnMultiply.classList.add('operation');

        this.btnZero = document.createElement("button");
        this.btnZero.innerText = '0';
        this.btnZero.classList.add('numbers');

        this.btnPoint = document.createElement("button");
        this.btnPoint.innerText = '.';
        this.btnPoint.classList.add('numbers');

        this.btnCalculate = document.createElement('button');
        this.btnCalculate.innerText = '=';
        this.btnCalculate.classList.add('calculateButton');

        this.btnDivide = document.createElement("button");
        this.btnDivide.innerText = '/';
        this.btnDivide.classList.add('operation');

        this.btnC = document.createElement("button");
        this.btnC.id = "del";
        this.btnC.innerText = 'Borrar';
        this.btnC.classList.add('operation');

        //Container
        this.container = document.createElement('div');

        //Filas
        this.row1 = document.createElement("tr");
        this.row2 = document.createElement("tr");
        this.row3 = document.createElement("tr");
        this.row4 = document.createElement("tr");
        this.row5 = document.createElement("tr");
        this.row6 = document.createElement("tr");

        //Agrego todas las filas al container
        this.container.appendChild(this.row1);
        this.container.appendChild(this.row2);
        this.container.appendChild(this.row3);
        this.container.appendChild(this.row4);
        this.container.appendChild(this.row5);
        this.container.appendChild(this.row6);

        //Agrego cada elemento a su fila
        this.row1.appendChild(this.display);
        this.row2.appendChild(this.btnOne);
        this.row2.appendChild(this.btnTwo);
        this.row2.appendChild(this.btnThree);
        this.row2.appendChild(this.btnPlus);
        this.row3.appendChild(this.btnFour);
        this.row3.appendChild(this.btnFive);
        this.row3.appendChild(this.btnSix);
        this.row3.appendChild(this.btnRest);
        this.row4.appendChild(this.btnSeven);
        this.row4.appendChild(this.btnEight);
        this.row4.appendChild(this.btnNine);
        this.row4.appendChild(this.btnMultiply);
        this.row5.appendChild(this.btnZero);
        this.row5.appendChild(this.btnPoint);
        this.row5.appendChild(this.btnCalculate);
        this.row5.appendChild(this.btnDivide);
        this.row6.appendChild(this.btnC);
    }
}


//------------------------CONTROLLER---------------------------//

class controller
{
    constructor( viewReference, modelReference )
    {
        this.innerView = viewReference;
        this.innerModel = modelReference;

        this.innerView.btnOne.addEventListener('click', ()=>{ this.onbtn1click() } );
        this.innerView.btnTwo.addEventListener('click', ()=>{ this.onbtn2click() } );
        this.innerView.btnThree.addEventListener('click', ()=>{ this.onbtn3click() } );
        this.innerView.btnPlus.addEventListener('click', ()=>{ this.onbtnPlusclick() } );
        this.innerView.btnFour.addEventListener('click', ()=>{ this.onbtn4click() } );
        this.innerView.btnFive.addEventListener('click', ()=>{ this.onbtn5click() } );
        this.innerView.btnSix.addEventListener('click', ()=>{ this.onbtn6click() } );
        this.innerView.btnRest.addEventListener('click', ()=>{ this.onbtnRestclick() } );
        this.innerView.btnSeven.addEventListener('click', ()=>{ this.onbtn7click() } );
        this.innerView.btnEight.addEventListener('click', ()=>{ this.onbtn8click() } );
        this.innerView.btnNine.addEventListener('click', ()=>{ this.onbtn9click() } );
        this.innerView.btnMultiply.addEventListener('click', ()=>{ this.onbtnMultiplyclick() } );
        this.innerView.btnZero.addEventListener('click', ()=>{ this.onbtn0click() } );
        this.innerView.btnPoint.addEventListener('click', ()=>{ this.onbtnPointclick() } );
        this.innerView.btnCalculate.addEventListener('click', ()=>{ this.onButtonCalculateClick() } );
        this.innerView.btnDivide.addEventListener('click', ()=>{ this.onbtnDivideclick() } );
        this.innerView.btnC.addEventListener('click', ()=>{ this.onbtnCclick() } );
    }

    onbtn1click() 
    {
        this.innerView.display.value += "1";
    }

    onbtn2click() 
    {
        this.innerView.display.value += "2";
    }

    onbtn3click() 
    {
        this.innerView.display.value += "3";
    }

    onbtnPlusclick() 
    {
        this.innerView.display.value += "+";
        // clear();
    }

    onbtn4click() 
    {
        this.innerView.display.value += "4";
    }

    onbtn5click() 
    {
        this.innerView.display.value += "5";
    }

    onbtn6click() 
    {
        this.innerView.display.value += "6";
    }

    onbtnRestclick() 
    {
        this.innerView.display.value += "-";
        // clear();
    }

    onbtn7click() 
    {
        this.innerView.display.value += "7";
    }

    onbtn8click() 
    {
        this.innerView.display.value += "8";
    }

    onbtn9click() 
    {
        this.innerView.display.value += "9";
    }

    onbtnMultiplyclick() 
    {
        this.innerView.display.value += "*";
        // clear();
    }

    onbtn0click() 
    {
        this.innerView.display.value += "0";
    }

    onbtnPointclick() 
    {
        this.innerView.display.value += ".";
    }

    onButtonCalculateClick()
    {
        this.innerView.display.value = this.innerModel.evaluateExpression(this.innerView.display.value);
        // resolve();
    }

    onbtnDivideclick() 
    {
        this.innerView.display.value += "/";
        // clear();
    }

    onbtnCclick() 
    {
        this.innerView.display.value += "";
        // reset();
    }

    // clear() 
    // {
    //     this.innerView.display.textContent = "";
    // }

    // reset() 
    // {
    //     // this.innerView.display.textContent = "";
    //     this.innerView.display.value += "";
    //     // this.innerView.optionA = 0;
    //     // this.innerView.optionB = 0;
    //     this.innerView.operation = "";
    // }

    // resolve() 
    // {
    //     this.innerView.res = 0;
    //     switch (this.innerView.operation) 
    //     {
    //         case "+":
    //             this.innerView.res = parseFloat(this.innerView.optionA) + parseFloat(this.innerView.optionB);
    //             break;
    //         case "-":
    //             this.innerView.res = parseFloat(this.innerView.optionA) - parseFloat(this.innerView.optionB);
    //             break;
    //         case "*":
    //             this.innerView.res = parseFloat(this.innerView.optionA) * parseFloat(this.innerView.optionB);
    //             break;
    //         case "/":
    //             this.innerView.res = parseFloat(this.innerView.optionA) / parseFloat(this.innerView.optionB);
    //             break;
    //     }
    //     reset();
    //     this.innerView.display.textContent = this.innerView.res;
    // }
}


//------------------------MODEL---------------------------//

class model 
{
    constructor(){}

    evaluateExpression(expr)
    {
        return eval(expr);
    }
}


//------------------------MAIN---------------------------//

function main() 
{
    let calculatorView = new view();
    let calculatorModel = new model();
    let calculatorController = new controller();

    document.body.appendChild(calculatorView.container);
}

window.addEventListener("load", main);