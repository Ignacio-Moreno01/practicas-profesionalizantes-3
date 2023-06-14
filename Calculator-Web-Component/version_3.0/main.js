import { calculatorView } from "./calculator/view.js";
import { calculatorController } from "./calculator/controller.js";
import { calculatorModel } from "./calculator/model.js";

class calculator
{
    constructor()
    {
        this.innerView = new calculatorView();
        this.innerController = new calculatorController(this.innerView);
    }
}

function main()
{
    alert('Starting calculator...');

    let calculatorInstance = new calculator();
    document.body.appendChild(calculatorInstance.innerView.container);
}

window.onload = main;
// window.addEventListener('load', main);