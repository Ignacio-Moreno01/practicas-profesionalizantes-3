import { controller } from "./controller";

class view{
    constructor(){

        //Elementos
        let container = document.createElement("div");
        container.classList.add('cont');

        let display = document.createElement("span");
        display.id = "display";
        display.type = "text";
        display.value = '';
        // document.body.appendChild(display);

        //Salto de linea
        let jump1 = document.createElement("br");
        // document.body.appendChild(jump1);

        let btnOne = document.createElement("button");
        btnOne.innerText = '1';
        btnOne.classList.add('numbers');
        // document.body.appendChild(btnOne);

        let btnTwo = document.createElement("button");
        btnTwo.innerText = '2';
        btnTwo.classList.add('numbers');
        // document.body.appendChild(btnTwo);

        let btnThree = document.createElement("button");
        btnThree.innerText = '3';
        btnThree.classList.add('numbers');
        // document.body.appendChild(btnThree);

        let btnPlus = document.createElement("button");
        btnPlus.innerText = '+';
        btnPlus.classList.add('operations');
        // document.body.appendChild(btnPlus);

        //Salto de linea
        let jump2 = document.createElement("br");
        // document.body.appendChild(jump2);

        let btnFour = document.createElement("button");
        btnFour.innerText = '4';
        btnFour.classList.add('numbers');
        // document.body.appendChild(btnFour);

        let btnFive = document.createElement("button");
        btnFive.innerText = '5';
        btnFive.classList.add('numbers');
        // document.body.appendChild(btnFive);

        let btnSix = document.createElement("button");
        btnSix.innerText = '6';
        btnSix.classList.add('numbers');
        // document.body.appendChild(btnSix);

        let btnRest = document.createElement("button");
        btnRest.innerText = '-';
        btnRest.classList.add('operations');
        // document.body.appendChild(btnRest);

        //Salto de linea
        let jump3 = document.createElement("br");
        // document.body.appendChild(jump3);

        let btnSeven = document.createElement("button");
        btnSeven.innerText = '7';
        btnSeven.classList.add('numbers');
        // document.body.appendChild(btnSeven);

        let btnEight = document.createElement("button");
        btnEight.innerText = '8';
        btnEight.classList.add('numbers');
        // document.body.appendChild(btnEight);

        let btnNine = document.createElement("button");
        btnNine.innerText = '9';
        btnNine.classList.add('numbers');
        // document.body.appendChild(btnNine);

        let btnMultiply = document.createElement("button");
        btnMultiply.innerText = '*';
        btnMultiply.classList.add('operations');
        // document.body.appendChild(btnMultiply);

        //Salto de linea
        let jump4 = document.createElement("br");
        // document.body.appendChild(jump4);

        let btnZero = document.createElement("button");
        btnZero.innerText = '0';
        btnZero.classList.add('numbers');
        // document.body.appendChild(btnZero);

        let btnPoint = document.createElement("button");
        btnPoint.innerText = '.';
        btnPoint.classList.add('numbers');
        // document.body.appendChild(btnPoint);

        let btnEquality = document.createElement("button");
        btnEquality.innerText = '=';
        btnEquality.classList.add('operations');
        // document.body.appendChild(btnEquality);

        let btnDivide = document.createElement("button");
        btnDivide.innerText = '/';
        btnDivide.classList.add('operations');
        // document.body.appendChild(btnDivide);

        //Salto de linea
        let jump5 = document.createElement("br");
        // document.body.appendChild(jump5);

        let btnC = document.createElement("button");
        btnC.id = "del";
        btnC.innerText = 'Borrar';
        btnC.classList.add('operations');
        // document.body.appendChild(btnC);

        //Agrego todos los elementos al contenedor
        container.appendChild(display);
        container.appendChild(btnPlus);
        container.appendChild(btnRest);
        container.appendChild(btnMultiply);
        container.appendChild(btnDivide);
        container.appendChild(btnOne);
        container.appendChild(btnTwo);
        container.appendChild(btnThree);
        container.appendChild(btnFour);
        container.appendChild(btnFive);
        container.appendChild(btnSix);
        container.appendChild(btnSeven);
        container.appendChild(btnEight);
        container.appendChild(btnNine);
        container.appendChild(btnZero);
        container.appendChild(btnPoint);
        container.appendChild(btnEquality);
        container.appendChild(btnC);

        //Agrego el contenedor al body
        document.body.appendChild(container);
    }
}

export { view };