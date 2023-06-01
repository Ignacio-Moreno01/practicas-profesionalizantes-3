let opA;
let opB;
let operation;

function start(){
    let display = document.getElementById("display");
    let plus = document.getElementById("plus");
    let rest = document.getElementById("rest");
    let multiply = document.getElementById("multiply");
    let division = document.getElementById("division");
    let equality = document.getElementById("equality");
    let point = document.getElementById("point");
    let del = document.getElementById("del");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let zero = document.getElementById("zero");

    point.onclick = function(e){
        display.textContent = display.textContent + ".";
    }
    one.onclick = function(e){
        display.textContent = display.textContent + "1";
    }
    two.onclick = function(e){
        display.textContent = display.textContent + "2";
    }
    three.onclick = function(e){
        display.textContent = display.textContent + "3";
    }
    four.onclick = function(e){
        display.textContent = display.textContent + "4";
    }
    five.onclick = function(e){
        display.textContent = display.textContent + "5";
    }
    six.onclick = function(e){
        display.textContent = display.textContent + "6";
    }
    seven.onclick = function(e){
        display.textContent = display.textContent + "7";
    }
    eight.onclick = function(e){
        display.textContent = display.textContent + "8";
    }
    nine.onclick = function(e){
        display.textContent = display.textContent + "9";
    }
    zero.onclick = function(e){
        display.textContent = display.textContent + "0";
    }

    del.onclick = function(e){
        reset();
    }
    plus.onclick = function(e){
        opA = display.textContent;
        operation = "+";
        clear();
    }
    rest.onclick = function(e){
        opA = display.textContent;
        operation = "-";
        clear();
    }
    multiply.onclick = function(e){
        opA = display.textContent;
        operation = "*";
        clear();
    }
    division.onclick = function(e){
        opA = display.textContent;
        operation = "/";
        clear();
    }
    equality.onclick = function(e){
        opB = display.textContent;
        resolve();
    }
}

function clear(){
    display.textContent = "";
}

function reset(){
    display.textContent = "";
    opA = 0;
    opB = 0;
    operation = "";
}

function resolve(){
    let res = 0;
    switch(operation){
        case "+":
            res = parseFloat(opA) + parseFloat(opB);
            break;
        case "-":
            res = parseFloat(opA) - parseFloat(opB);
            break;
        case "*":
            res = parseFloat(opA) * parseFloat(opB);
            break;
        case "/":
            res = parseFloat(opA) / parseFloat(opB);
            break;
    }
    reset();
    display.textContent = res;
}