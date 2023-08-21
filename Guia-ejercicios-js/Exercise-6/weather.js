const parameter = {
	month: [
		{ name: 'Enero', maxTemp: 42.4, mediumMaxTemp: 26.3, mediumTemp: 20.3, mediumMinTemp: 14.3, absMinTemp: 4.7, totalRain: 100.1, rainDays: 9, sunHours: 288.3, relativeHumidity: 76},
		{ name: 'Febrero', maxTemp: 38.1, mediumMaxTemp: 25.8, mediumTemp: 19.9, mediumMinTemp: 14.1, absMinTemp: 1.2, totalRain: 72.8, rainDays: 8, sunHours: 234.5, relativeHumidity: 77},
		{ name: 'Marzo', maxTemp: 36.3, mediumMaxTemp: 23.7, mediumTemp: 18.0, mediumMinTemp: 12.5, absMinTemp: 1.9, totalRain: 107.0, rainDays: 9, sunHours: 232.5, relativeHumidity: 79},
		{ name: 'Abril', maxTemp: 32.5, mediumMaxTemp: 20.5, mediumTemp: 14.6, mediumMinTemp: 9.1, absMinTemp: -1.0, totalRain: 73.3, rainDays: 9, sunHours: 195.0, relativeHumidity: 81},
		{ name: 'Mayo', maxTemp: 27.4, mediumMaxTemp: 16.8, mediumTemp: 11.3, mediumMinTemp: 6.4, absMinTemp: -3.0, totalRain: 73.5, rainDays: 9, sunHours: 167.4, relativeHumidity: 83},
		{ name: 'Junio', maxTemp: 22.2, mediumMaxTemp: 13.8, mediumTemp: 8.5, mediumMinTemp: 4.1, absMinTemp: -5.5, totalRain: 54.9, rainDays: 9, sunHours: 120.0, relativeHumidity: 84},
		{ name: 'Julio', maxTemp: 27.7, mediumMaxTemp: 13.1, mediumTemp: 8.1, mediumMinTemp: 3.8, absMinTemp: -9.3, totalRain: 58.9, rainDays: 9, sunHours: 127.1, relativeHumidity: 81},
		{ name: 'Agosto', maxTemp: 24.7, mediumMaxTemp: 14.4, mediumTemp: 8.9, mediumMinTemp: 4.0, absMinTemp: -6.4, totalRain: 64.0, rainDays: 8, sunHours: 164.3, relativeHumidity: 81},
		{ name: 'Septiembre', maxTemp: 28.8, mediumMaxTemp: 16.0, mediumTemp: 10.5, mediumMinTemp: 5.3, absMinTemp: -5.5, totalRain: 56.4, rainDays: 7, sunHours: 174.0, relativeHumidity: 80},
		{ name: 'Octubre', maxTemp: 34.4, mediumMaxTemp: 18.5, mediumTemp: 13.1, mediumMinTemp: 7.6, absMinTemp: -3.0, totalRain: 83.4, rainDays: 10, sunHours: 210.8, relativeHumidity: 80},
		{ name: 'Noviembre', maxTemp: 35.7, mediumMaxTemp: 21.7, mediumTemp: 15.9, mediumMinTemp: 10.1, absMinTemp: -2.0, totalRain: 75.3, rainDays: 10, sunHours: 222.0, relativeHumidity: 77},
		{ name: 'Diciembre', maxTemp: 39.4, mediumMaxTemp: 24.4, mediumTemp: 18.5, mediumMinTemp: 12.7, absMinTemp: -0.2, totalRain: 104.0, rainDays: 10, sunHours: 269.7, relativeHumidity: 76},
		{ name: 'Anual', maxTemp: 39.4, mediumMaxTemp: 19.6, mediumTemp: 14.0, mediumMinTemp: 8.7, absMinTemp: -9.3, totalRain: 923.6, rainDays: 107, sunHours: 2405.6, relativeHumidity: 80}	
	],
}

console.log("Mes: " + parameter.month[0].name);
console.log("Temperatura máxima (°C): " + parameter.month[0].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[0].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[0].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[0].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[0].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[0].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[0].rainDays);
console.log("Horas de sol: " + parameter.month[0].sunHours);
console.log("Humedad relativa (%): " + parameter.month[0].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[1].name);
console.log("Temperatura máxima (°C): " + parameter.month[1].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[1].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[1].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[1].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[1].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[1].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[1].rainDays);
console.log("Horas de sol: " + parameter.month[1].sunHours);
console.log("Humedad relativa (%): " + parameter.month[1].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[2].name);
console.log("Temperatura máxima (°C): " + parameter.month[2].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[2].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[2].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[2].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[2].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[2].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[2].rainDays);
console.log("Horas de sol: " + parameter.month[2].sunHours);
console.log("Humedad relativa (%): " + parameter.month[2].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[3].name);
console.log("Temperatura máxima (°C): " + parameter.month[3].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[3].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[3].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[3].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[3].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[3].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[3].rainDays);
console.log("Horas de sol: " + parameter.month[3].sunHours);
console.log("Humedad relativa (%): " + parameter.month[3].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[4].name);
console.log("Temperatura máxima (°C): " + parameter.month[4].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[4].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[4].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[4].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[4].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[4].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[4].rainDays);
console.log("Horas de sol: " + parameter.month[4].sunHours);
console.log("Humedad relativa (%): " + parameter.month[4].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[5].name);
console.log("Temperatura máxima (°C): " + parameter.month[5].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[5].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[5].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[5].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[5].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[5].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[5].rainDays);
console.log("Horas de sol: " + parameter.month[5].sunHours);
console.log("Humedad relativa (%): " + parameter.month[5].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[6].name);
console.log("Temperatura máxima (°C): " + parameter.month[6].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[6].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[6].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[6].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[6].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[6].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[6].rainDays);
console.log("Horas de sol: " + parameter.month[6].sunHours);
console.log("Humedad relativa (%): " + parameter.month[6].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[7].name);
console.log("Temperatura máxima (°C): " + parameter.month[7].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[7].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[7].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[7].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[7].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[7].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[7].rainDays);
console.log("Horas de sol: " + parameter.month[7].sunHours);
console.log("Humedad relativa (%): " + parameter.month[7].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[8].name);
console.log("Temperatura máxima (°C): " + parameter.month[8].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[8].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[8].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[8].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[8].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[8].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[8].rainDays);
console.log("Horas de sol: " + parameter.month[8].sunHours);
console.log("Humedad relativa (%): " + parameter.month[8].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[9].name);
console.log("Temperatura máxima (°C): " + parameter.month[9].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[9].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[9].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[9].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[9].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[9].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[9].rainDays);
console.log("Horas de sol: " + parameter.month[9].sunHours);
console.log("Humedad relativa (%): " + parameter.month[9].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[10].name);
console.log("Temperatura máxima (°C): " + parameter.month[10].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[10].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[10].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[10].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[10].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[10].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[10].rainDays);
console.log("Horas de sol: " + parameter.month[10].sunHours);
console.log("Humedad relativa (%): " + parameter.month[10].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[11].name);
console.log("Temperatura máxima (°C): " + parameter.month[11].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[11].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[11].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[11].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[11].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[11].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[11].rainDays);
console.log("Horas de sol: " + parameter.month[11].sunHours);
console.log("Humedad relativa (%): " + parameter.month[11].relativeHumidity);
console.log();

console.log("Promedio " + parameter.month[12].name);
console.log("Temperatura máxima (°C): " + parameter.month[12].maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.month[12].mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.month[12].mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.month[12].mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.month[12].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[12].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[12].rainDays);
console.log("Horas de sol: " + parameter.month[12].sunHours);
console.log("Humedad relativa (%): " + parameter.month[12].relativeHumidity);
console.log();

console.log("Fuente n. °1: NOAA, Servicio Meteorológico Nacional (precipitatión days)");