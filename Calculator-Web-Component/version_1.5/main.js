let optionA;
let optionB;
let operation;

function main()
{
    let display = document.createElement("span");
    display.id = "display";
    document.body.appendChild(display);

    //Salto de linea
    let jump1 = document.createElement("br");
    document.body.appendChild(jump1);

    let btnOne = document.createElement("button");
    btnOne.innerText = '1';
    btnOne.classList.add('numbers');
    btnOne.addEventListener('click', onbtn1click);
    document.body.appendChild(btnOne);

    let btnTwo = document.createElement("button");
    btnTwo.innerText = '2';
    btnTwo.classList.add('numbers');
    btnTwo.addEventListener('click', onbtn2click);
    document.body.appendChild(btnTwo);

    let btnThree = document.createElement("button");
    btnThree.innerText = '3';
    btnThree.classList.add('numbers');
    btnThree.addEventListener('click', onbtn3click);
    document.body.appendChild(btnThree);

    let btnPlus = document.createElement("button");
    btnPlus.innerText = '+';
    btnPlus.classList.add('operations');
    btnPlus.addEventListener('click', onbtnPlusclick);
    document.body.appendChild(btnPlus);

    //Salto de linea
    let jump2 = document.createElement("br");
    document.body.appendChild(jump2);

    let btnFour = document.createElement("button");
    btnFour.innerText = '4';
    btnFour.classList.add('numbers');
    btnFour.addEventListener('click', onbtn4click);
    document.body.appendChild(btnFour);

    let btnFive = document.createElement("button");
    btnFive.innerText = '5';
    btnFive.classList.add('numbers');
    btnFive.addEventListener('click', onbtn5click);
    document.body.appendChild(btnFive);

    let btnSix = document.createElement("button");
    btnSix.innerText = '6';
    btnSix.classList.add('numbers');
    btnSix.addEventListener('click', onbtn6click);
    document.body.appendChild(btnSix);

    let btnRest = document.createElement("button");
    btnRest.innerText = '-';
    btnRest.classList.add('operations');
    btnRest.addEventListener('click', onbtnRestclick);
    document.body.appendChild(btnRest);

    //Salto de linea
    let jump3 = document.createElement("br");
    document.body.appendChild(jump3);

    let btnSeven = document.createElement("button");
    btnSeven.innerText = '7';
    btnSeven.classList.add('numbers');
    btnSeven.addEventListener('click', onbtn7click);
    document.body.appendChild(btnSeven);

    let btnEight = document.createElement("button");
    btnEight.innerText = '8';
    btnEight.classList.add('numbers');
    btnEight.addEventListener('click', onbtn8click);
    document.body.appendChild(btnEight);

    let btnNine = document.createElement("button");
    btnNine.innerText = '9';
    btnNine.classList.add('numbers');
    btnNine.addEventListener('click', onbtn9click);
    document.body.appendChild(btnNine);

    let btnMultiply = document.createElement("button");
    btnMultiply.innerText = '*';
    btnMultiply.classList.add('operations');
    btnMultiply.addEventListener('click', onbtnMultiplyclick);
    document.body.appendChild(btnMultiply);

    //Salto de linea
    let jump4 = document.createElement("br");
    document.body.appendChild(jump4);

    let btnZero = document.createElement("button");
    btnZero.innerText = '0';
    btnZero.classList.add('numbers');
    btnZero.addEventListener('click', onbtn0click);
    document.body.appendChild(btnZero);

    let btnPoint = document.createElement("button");
    btnPoint.innerText = '.';
    btnPoint.classList.add('numbers');
    btnPoint.addEventListener('click', onbtnPointclick);
    document.body.appendChild(btnPoint);

    let btnEquality = document.createElement("button");
    btnEquality.innerText = '=';
    btnEquality.classList.add('operations');
    btnEquality.addEventListener('click', onbtnEqualityclick);
    document.body.appendChild(btnEquality);

    let btnDivide = document.createElement("button");
    btnDivide.innerText = '/';
    btnDivide.classList.add('operations');
    btnDivide.addEventListener('click', onbtnDivideclick);
    document.body.appendChild(btnDivide);

    //Salto de linea
    let jump5 = document.createElement("br");
    document.body.appendChild(jump5);

    let btnC = document.createElement("button");
    btnC.id = "del";
    btnC.innerText = 'Borrar';
    btnC.classList.add('operations');
    btnC.addEventListener('click', onbtnCclick);
    document.body.appendChild(btnC);
}

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

function clear(){
    display.textContent = "";
}

function reset(){
    display.textContent = "";
    optionA = 0;
    optionB = 0;
    operation = "";
}

function resolve(){
    let res = 0;
    switch(operation){
        case "+":
            res = parseFloat(optionA) + parseFloat(optionB);
            break;
        case "-":
            res = parseFloat(optionA) - parseFloat(optionB);
            break;
        case "*":
            res = parseFloat(optionA) * parseFloat(optionB);
            break;
        case "/":
            res = parseFloat(optionA) / parseFloat(optionB);
            break;
    }
    reset();
    display.textContent = res;
}

window.addEventListener('load', main);