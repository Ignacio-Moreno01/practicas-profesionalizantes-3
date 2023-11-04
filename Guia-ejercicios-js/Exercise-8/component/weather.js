import { WeatherView } from "./weather/view.js";
import { WeatherController } from "./weather/controller.js";
import { WeatherModel } from "./weather/model.js";

class Weather
{
    constructor()
    {
        this.innerView = new WeatherView();
        this.innerModel = new WeatherModel();
        this.innerController = new WeatherController(this.innerView, this.innerModel);
    }
}

export { Weather };