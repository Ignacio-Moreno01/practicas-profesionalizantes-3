import { view } from "./view";

class calculator {
    constructor() {
        this.view = new View();
        this.model = new Model();
        this.controller = new Controller(this.view, this.model);
    }
}

function main() {
    let myCalculator = new calculator();
}

window.addEventListener("load", main);