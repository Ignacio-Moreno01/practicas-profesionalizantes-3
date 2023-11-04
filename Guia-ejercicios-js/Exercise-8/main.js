import { Weather } from "./component/weather.js";

function main()
{
    alert('Starting weather service...');

    let calculatorInstance = new Weather();
    document.body.appendChild(calculatorInstance.innerView.container);
}

window.onload = main;