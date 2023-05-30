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
    btnOne.id = "one";
    btnOne.innerText = '1';
    btnOne.classList.add('numbers');
    btnOne.addEventListener('click', onbtn1buttonclick);
    document.body.appendChild(btnOne);

    let btnTwo = document.createElement("button");
    btnTwo.innerText = '2';
    btnTwo.classList.add('numbers');
    btnTwo.addEventListener('click', onbtn2buttonclick);
    document.body.appendChild(btnTwo);

    let btnThree = document.createElement("button");
    btnThree.innerText = '3';
    btnThree.classList.add('numbers');
    btnThree.addEventListener('click', onbtn3buttonclick);
    document.body.appendChild(btnThree);

    let btnEqual = document.createElement("button");
    btnEqual.innerText = '+';
    btnEqual.classList.add('operations');
    btnEqual.addEventListener('click', onbtnEqualbuttonclick);
    document.body.appendChild(btnEqual);

    //Salto de linea
    let jump2 = document.createElement("br");
    document.body.appendChild(jump2);

    let btnFour = document.createElement("button");
    btnFour.innerText = '4';
    btnFour.classList.add('numbers');
    btnFour.addEventListener('click', onbtn4buttonclick);
    document.body.appendChild(btnFour);

    let btnFive = document.createElement("button");
    btnFive.innerText = '5';
    btnFive.classList.add('numbers');
    btnFive.addEventListener('click', onbtn5buttonclick);
    document.body.appendChild(btnFive);

    let btnSix = document.createElement("button");
    btnSix.innerText = '6';
    btnSix.classList.add('numbers');
    btnSix.addEventListener('click', onbtn6buttonclick);
    document.body.appendChild(btnSix);

    let btnRest = document.createElement("button");
    btnRest.innerText = '-';
    btnRest.classList.add('operations');
    btnRest.addEventListener('click', onbtnRestbuttonclick);
    document.body.appendChild(btnRest);

    //Salto de linea
    let jump3 = document.createElement("br");
    document.body.appendChild(jump3);

    let btnSeven = document.createElement("button");
    btnSeven.innerText = '7';
    btnSeven.classList.add('numbers');
    btnSeven.addEventListener('click', onbtn7buttonclick);
    document.body.appendChild(btnSeven);

    let btnEight = document.createElement("button");
    btnEight.innerText = '8';
    btnEight.classList.add('numbers');
    btnEight.addEventListener('click', onbtn8buttonclick);
    document.body.appendChild(btnEight);

    let btnNine = document.createElement("button");
    btnNine.innerText = '9';
    btnNine.classList.add('numbers');
    btnNine.addEventListener('click', onbtn9buttonclick);
    document.body.appendChild(btnNine);

    let btnMultiply = document.createElement("button");
    btnMultiply.innerText = '*';
    btnMultiply.classList.add('operations');
    btnMultiply.addEventListener('click', onbtnMultiplybuttonclick);
    document.body.appendChild(btnMultiply);

    //Salto de linea
    let jump4 = document.createElement("br");
    document.body.appendChild(jump4);

    let btnZero = document.createElement("button");
    btnZero.innerText = '0';
    btnZero.classList.add('numbers');
    btnZero.addEventListener('click', onbtn0buttonclick);
    document.body.appendChild(btnZero);

    let btnPoint = document.createElement("button");
    btnPoint.innerText = '.';
    btnPoint.classList.add('numbers');
    btnPoint.addEventListener('click', onbtnPointbuttonclick);
    document.body.appendChild(btnPoint);

    let btnEquality = document.createElement("button");
    btnEquality.innerText = '=';
    btnEquality.classList.add('operations');
    btnEquality.addEventListener('click', onbtnEqualitybuttonclick);
    document.body.appendChild(btnEquality);

    let btnDivide = document.createElement("button");
    btnDivide.innerText = '/';
    btnDivide.classList.add('operations');
    btnDivide.addEventListener('click', onbtnDividebuttonclick);
    document.body.appendChild(btnDivide);

    //Salto de linea
    let jump5 = document.createElement("br");
    document.body.appendChild(jump5);

    let btnC = document.createElement("button");
    btnC.id = "del";
    btnC.innerText = 'Borrar';
    btnC.classList.add('operations');
    btnC.addEventListener('click', onbtnCbuttonclick);
    document.body.appendChild(btnC);
}

function onbtn1buttonclick(event)
{
    display.textContent = display.textContent + "1";
}

function onbtn2buttonclick(event)
{
    display.textContent = display.textContent + "2";
}

function onbtn3buttonclick(event)
{
    display.textContent = display.textContent + "3";
}

function onbtnEqualbuttonclick(event)
{
    optionA = display.textContent;
    operation = "+";
    clear();
}

function onbtn4buttonclick(event)
{
    display.textContent = display.textContent + "4";
}

function onbtn5buttonclick(event)
{
    display.textContent = display.textContent + "5";
}

function onbtn6buttonclick(event)
{
    display.textContent = display.textContent + "6";
}

function onbtnRestbuttonclick(event)
{
    optionA = display.textContent;
    operation = "-";
    clear();
}

function onbtn7buttonclick(event)
{
    display.textContent = display.textContent + "7";
}

function onbtn8buttonclick(event)
{
    display.textContent = display.textContent + "8";
}

function onbtn9buttonclick(event)
{
    display.textContent = display.textContent + "9";
}

function onbtnMultiplybuttonclick(event)
{
    optionA = display.textContent;
    operation = "*";
    clear();
}

function onbtn0buttonclick(event)
{
    display.textContent = display.textContent + "0";
}

function onbtnPointbuttonclick(event)
{
    display.textContent = display.textContent + ".";
}

function onbtnEqualitybuttonclick(event)
{
    optionB = display.textContent;
    resolve();
}

function onbtnDividebuttonclick(event)
{
    optionA = display.textContent;
    operation = "/";
    clear();
}

function onbtnCbuttonclick(event)
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