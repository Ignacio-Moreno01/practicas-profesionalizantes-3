class WeatherController
{
    constructor(model, view) 
    {
        this.model = model;
        this.view = view;

        document.getElementById('representBtn').addEventListener('click', this.onRepresent.bind(this));

		// this.WeatherView.btnInfo.addEventListener("click", () => {
		// this.onBtnInfoClick();
		// });
    }

    onRepresent() {
        const data = this.model.data;
        const getColorForTemperature = this.model.getColorForTemperature.bind(this.model);
        this.view.render(data, getColorForTemperature);
    }

	// onBtnInfoClick(event) 
	// {
 	//    	document.addEventListener('DOMContentLoaded', function () {
	// 			const canvas = document.getElementById('graphic');
	// 	    	const ctx = canvas.getContext('2d');
	// 	    	const representBtn = document.getElementById('representBtn');

	// 			representBtn.addEventListener('click', function () {
	// 	        	// Datos de ejemplo: temperaturas en grados Celsius
	// 	        	const datosMeteorologicos = [18, 21, 25, 29, 34, 38, 41, 37, 31, 26, 21];

	// 		    	// Mapear temperaturas a colores (este es un ejemplo simple, puedes usar una escala de colores realista)
	// 		    	const colores = datosMeteorologicos.map(temperatura => {
	// 	            	const intensidadRojo = Math.min(255, Math.floor(temperatura * 10));
	// 	            	const intensidadAzul = Math.min(255, Math.floor(255 - (temperatura * 8)));
	// 	            	return `rgb(${intensidadRojo}, 0, ${intensidadAzul})`;
	// 		    	});

	// 		    	// Calcular el ancho de cada barra en el gráfico
	// 		    	const barraAncho = canvas.width / datosMeteorologicos.length;

	// 		    	// Limpiar el gráfico
	// 	        	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// 	        	// Dibujar las barras
	// 	        	datosMeteorologicos.forEach((temperatura, indice) => {
	// 		        	const barraAltura = (temperatura / 2); // Escala para ajustar la altura de las barras
	// 		        	ctx.fillStyle = colores[indice];
	// 	           		ctx.fillRect(indice * barraAncho, canvas.height - barraAltura, barraAncho, barraAltura);
	// 	        	});
	// 	    	});
	// 		});
	//  }
}

export { WeatherController };