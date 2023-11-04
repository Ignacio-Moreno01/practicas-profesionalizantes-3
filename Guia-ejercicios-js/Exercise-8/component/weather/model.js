class WeatherModel
{
    constructor()
    {
        this.parameter = {
			month: [
				{ name: 'Enero', maxTemp: 108.32, mediumMaxTemp: 79.34, mediumTemp: 68.54, mediumMinTemp: 57.74, absMinTemp: 40.46, totalRain: 100.1, rainDays: 9, sunHours: 288.3, relativeHumidity: 76},
				{ name: 'Febrero', maxTemp: 100.58, mediumMaxTemp: 78.44, mediumTemp: 67.82, mediumMinTemp: 57.38, absMinTemp: 34.16, totalRain: 72.8, rainDays: 8, sunHours: 234.5, relativeHumidity: 77},
				{ name: 'Marzo', maxTemp: 97.34, mediumMaxTemp: 74.66, mediumTemp: 64.4, mediumMinTemp: 54.5, absMinTemp: 35.42, totalRain: 107.0, rainDays: 9, sunHours: 232.5, relativeHumidity: 79},
				{ name: 'Abril', maxTemp: 90.5, mediumMaxTemp: 68.9, mediumTemp: 58.28, mediumMinTemp: 48.38, absMinTemp: 30.2, totalRain: 73.3, rainDays: 9, sunHours: 195.0, relativeHumidity: 81},
				{ name: 'Mayo', maxTemp: 81.32, mediumMaxTemp: 62.24, mediumTemp: 52.34, mediumMinTemp: 43.52, absMinTemp: 26.6, totalRain: 73.5, rainDays: 9, sunHours: 167.4, relativeHumidity: 83},
				{ name: 'Junio', maxTemp: 71.96, mediumMaxTemp: 56.84, mediumTemp: 47.3, mediumMinTemp: 39.38, absMinTemp: 22.1, totalRain: 54.9, rainDays: 9, sunHours: 120.0, relativeHumidity: 84},
				{ name: 'Julio', maxTemp: 81.86, mediumMaxTemp: 55.58, mediumTemp: 46.58, mediumMinTemp: 38.84, absMinTemp: 15.26, totalRain: 58.9, rainDays: 9, sunHours: 127.1, relativeHumidity: 81},
				{ name: 'Agosto', maxTemp: 76.46, mediumMaxTemp: 57.92, mediumTemp: 48.02, mediumMinTemp: 39.2, absMinTemp: 20.48, totalRain: 64.0, rainDays: 8, sunHours: 164.3, relativeHumidity: 81},
				{ name: 'Septiembre', maxTemp: 83.84, mediumMaxTemp: 60.8, mediumTemp: 50.9, mediumMinTemp: 41.54, absMinTemp: 22.1, totalRain: 56.4, rainDays: 7, sunHours: 174.0, relativeHumidity: 80},
				{ name: 'Octubre', maxTemp: 93.92, mediumMaxTemp: 65.3, mediumTemp: 55.58, mediumMinTemp: 45.68, absMinTemp: 26.6, totalRain: 83.4, rainDays: 10, sunHours: 210.8, relativeHumidity: 80},
				{ name: 'Noviembre', maxTemp: 96.26, mediumMaxTemp: 71.06, mediumTemp: 60.62, mediumMinTemp: 50.18, absMinTemp: 28.4, totalRain: 75.3, rainDays: 10, sunHours: 222.0, relativeHumidity: 77},
				{ name: 'Diciembre', maxTemp: 102.92, mediumMaxTemp: 75.92, mediumTemp: 65.3, mediumMinTemp: 54.86, absMinTemp: 31.64, totalRain: 104.0, rainDays: 10, sunHours: 269.7, relativeHumidity: 76},
				{ name: 'Anual', maxTemp: 102.92, mediumMaxTemp: 67.28, mediumTemp: 57.2, mediumMinTemp: 47.66, absMinTemp: 15.26, totalRain: 923.6, rainDays: 107, sunHours: 2405.6, relativeHumidity: 80}	
			],
		}
    }

    getColorForTemperature(temperature) 
    {
        // Implementar lógica para asignar colores en función de los rangos de temperatura
        // Devolver un color en formato RGB, por ejemplo, "rgb(255, 0, 0)" para rojo
        // Utilizar una escala de colores
    }
}

export { WeatherModel };