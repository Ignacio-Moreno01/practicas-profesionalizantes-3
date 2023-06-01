class model{
    constructor(){

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
    }
}

export { model };