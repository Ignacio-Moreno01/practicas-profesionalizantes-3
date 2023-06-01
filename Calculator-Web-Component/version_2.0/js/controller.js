import { model } from "./model";

let optionA;
let optionB;
let operation;

class controller{
    constructor(viewReference, modelReference){
        // this.view = viewReference;
        // this.model = modelReference;

        //Eventos
        btnOne.addEventListener('click', onbtn1click);
        btnTwo.addEventListener('click', onbtn2click);
        btnThree.addEventListener('click', onbtn3click);
        btnPlus.addEventListener('click', onbtnPlusclick);
        btnFour.addEventListener('click', onbtn4click);
        btnFive.addEventListener('click', onbtn5click);
        btnSix.addEventListener('click', onbtn6click);
        btnRest.addEventListener('click', onbtnRestclick);
        btnSeven.addEventListener('click', onbtn7click);
        btnEight.addEventListener('click', onbtn8click);
        btnNine.addEventListener('click', onbtn9click);
        btnMultiply.addEventListener('click', onbtnMultiplyclick);
        btnZero.addEventListener('click', onbtn0click);
        btnPoint.addEventListener('click', onbtnPointclick);
        btnEquality.addEventListener('click', onbtnEqualityclick);
        btnDivide.addEventListener('click', onbtnDivideclick);
        btnC.addEventListener('click', onbtnCclick);

        //Funciones
        function onbtn1click(event)
        {
            display.textContent = display.textContent + "1";
        }

        function onbtn2click(event)
        {
            display.textContent = display.textContent + "2";
        }

        function onbtn3click(event)
        {
            display.textContent = display.textContent + "3";
        }

        function onbtnPlusclick(event)
        {
            optionA = display.textContent;
            operation = "+";
            clear();
        }

        function onbtn4click(event)
        {
            display.textContent = display.textContent + "4";
        }

        function onbtn5click(event)
        {
            display.textContent = display.textContent + "5";
        }

        function onbtn6click(event)
        {
            display.textContent = display.textContent + "6";
        }

        function onbtnRestclick(event)
        {
            optionA = display.textContent;
            operation = "-";
            clear();
        }

        function onbtn7click(event)
        {
            display.textContent = display.textContent + "7";
        }

        function onbtn8click(event)
        {
            display.textContent = display.textContent + "8";
        }

        function onbtn9click(event)
        {
            display.textContent = display.textContent + "9";
        }

        function onbtnMultiplyclick(event)
        {
            optionA = display.textContent;
            operation = "*";
            clear();
        }

        function onbtn0click(event)
        {
            display.textContent = display.textContent + "0";
        }

        function onbtnPointclick(event)
        {
            display.textContent = display.textContent + ".";
        }

        function onbtnEqualityclick(event)
        {
            optionB = display.textContent;
            resolve();
        }

        function onbtnDivideclick(event)
        {
            optionA = display.textContent;
            operation = "/";
            clear();
        }

        function onbtnCclick(event)
        {
            reset();
        }
    }
}

export { controller };