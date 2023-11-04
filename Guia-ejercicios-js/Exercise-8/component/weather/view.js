class WeatherView
{
    constructor()
    {
        this.document = document;
        this.container = this.document.createElement('div');
        this.document.body.appendChild(this.container);

        this.btnInfo = document.createElement('button');
        this.btnInfo.id = 'representBtn';
        this.btnInfo.textContent = 'Representar información';
        this.btnInfo.classList.add('numbers');
        this.container.appendChild(this.btnInfo);

        //Salto de linea
        this.jump1 = document.createElement('br');
        this.container.appendChild(this.jump1);

        this.graphicInfo = document.createElement('canvas');
        this.graphicInfo.id = 'graphic';
        this.graphicInfo.width = '400';
        this.graphicInfo.height = '400';
        this.context = this.canvas.getContext('2d');
        this.container.appendChild(this.graphicInfo);


    }

    render(data, getColorForTemperature) 
    {
        // Implementar lógica para dibujar los datos meteorológicos en el lienzo
        // Utilizar getColorForTemperature para asignar colores a las temperaturas
    }
}

export { WeatherView };