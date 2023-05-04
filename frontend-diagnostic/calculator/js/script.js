let opA;
let opB;
let operation;

function init(){
    let result = document.getElementById("result");
    let equal = document.getElementById("equal");
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

    one.onclick = function(e){
        result.textContent = result.textContent + "1";
    }
    two.onclick = function(e){
        result.textContent = result.textContent + "2";
    }
    three.onclick = function(e){
        result.textContent = result.textContent + "3";
    }
    four.onclick = function(e){
        result.textContent = result.textContent + "4";
    }
    five.onclick = function(e){
        result.textContent = result.textContent + "5";
    }
    six.onclick = function(e){
        result.textContent = result.textContent + "6";
    }
    seven.onclick = function(e){
        result.textContent = result.textContent + "7";
    }
    eight.onclick = function(e){
        result.textContent = result.textContent + "8";
    }
    nine.onclick = function(e){
        result.textContent = result.textContent + "9";
    }
    zero.onclick = function(e){
        result.textContent = result.textContent + "0";
    }

    del.onclick = function(e){
        reset();
    }
    equal.onclick = function(e){
        opA = result.textContent;
        operation = "+";
        clear();
    }
    rest.onclick = function(e){
        opA = result.textContent;
        operation = "-";
        clear();
    }
    multiply.onclick = function(e){
        opA = result.textContent;
        operation = "*";
        clear();
    }
    division.onclick = function(e){
        opA = result.textContent;
        operation = "/";
        clear();
    }
    equality.onclick = function(e){
        opB = result.textContent;
        resolve();
    }
}

function clear(){
    result.textContent = "";
}

function reset(){
    result.textContent = "";
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
            res = parseFloat(opA) + parseFloat(opB);
            break;
        case "*":
            res = parseFloat(opA) + parseFloat(opB);
            break;
        case "/":
            res = parseFloat(opA) + parseFloat(opB);
            break;
    }
    reset();
    result.textContent = res;
}