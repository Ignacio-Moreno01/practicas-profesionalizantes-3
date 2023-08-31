const parameter = {
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

console.log("Mes: " + parameter.month[0].name);
console.log("Temperatura máxima (°F): " + parameter.month[0].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[0].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[0].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[0].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[0].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[0].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[0].rainDays);
console.log("Horas de sol: " + parameter.month[0].sunHours);
console.log("Humedad relativa (%): " + parameter.month[0].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[1].name);
console.log("Temperatura máxima (°F): " + parameter.month[1].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[1].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[1].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[1].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[1].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[1].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[1].rainDays);
console.log("Horas de sol: " + parameter.month[1].sunHours);
console.log("Humedad relativa (%): " + parameter.month[1].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[2].name);
console.log("Temperatura máxima (°F): " + parameter.month[2].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[2].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[2].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[2].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[2].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[2].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[2].rainDays);
console.log("Horas de sol: " + parameter.month[2].sunHours);
console.log("Humedad relativa (%): " + parameter.month[2].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[3].name);
console.log("Temperatura máxima (°F): " + parameter.month[3].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[3].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[3].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[3].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[3].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[3].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[3].rainDays);
console.log("Horas de sol: " + parameter.month[3].sunHours);
console.log("Humedad relativa (%): " + parameter.month[3].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[4].name);
console.log("Temperatura máxima (°F): " + parameter.month[4].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[4].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[4].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[4].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[4].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[4].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[4].rainDays);
console.log("Horas de sol: " + parameter.month[4].sunHours);
console.log("Humedad relativa (%): " + parameter.month[4].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[5].name);
console.log("Temperatura máxima (°F): " + parameter.month[5].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[5].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[5].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[5].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[5].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[5].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[5].rainDays);
console.log("Horas de sol: " + parameter.month[5].sunHours);
console.log("Humedad relativa (%): " + parameter.month[5].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[6].name);
console.log("Temperatura máxima (°F): " + parameter.month[6].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[6].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[6].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[6].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[6].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[6].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[6].rainDays);
console.log("Horas de sol: " + parameter.month[6].sunHours);
console.log("Humedad relativa (%): " + parameter.month[6].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[7].name);
console.log("Temperatura máxima (°F): " + parameter.month[7].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[7].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[7].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[7].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[7].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[7].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[7].rainDays);
console.log("Horas de sol: " + parameter.month[7].sunHours);
console.log("Humedad relativa (%): " + parameter.month[7].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[8].name);
console.log("Temperatura máxima (°F): " + parameter.month[8].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[8].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[8].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[8].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[8].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[8].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[8].rainDays);
console.log("Horas de sol: " + parameter.month[8].sunHours);
console.log("Humedad relativa (%): " + parameter.month[8].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[9].name);
console.log("Temperatura máxima (°F): " + parameter.month[9].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[9].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[9].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[9].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[9].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[9].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[9].rainDays);
console.log("Horas de sol: " + parameter.month[9].sunHours);
console.log("Humedad relativa (%): " + parameter.month[9].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[10].name);
console.log("Temperatura máxima (°F): " + parameter.month[10].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[10].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[10].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[10].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[10].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[10].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[10].rainDays);
console.log("Horas de sol: " + parameter.month[10].sunHours);
console.log("Humedad relativa (%): " + parameter.month[10].relativeHumidity);
console.log();

console.log("Mes: " + parameter.month[11].name);
console.log("Temperatura máxima (°F): " + parameter.month[11].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[11].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[11].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[11].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[11].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[11].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[11].rainDays);
console.log("Horas de sol: " + parameter.month[11].sunHours);
console.log("Humedad relativa (%): " + parameter.month[11].relativeHumidity);
console.log();

console.log("Promedio " + parameter.month[12].name);
console.log("Temperatura máxima (°F): " + parameter.month[12].maxTemp);
console.log("Temperatura máxima media (°F): " + parameter.month[12].mediumMaxTemp);
console.log("Temperatura media (°F): " + parameter.month[12].mediumTemp);
console.log("Temperatura mínima media (°F): " + parameter.month[12].mediumMinTemp);
console.log("Temperatura mínima absorvida (°F): " + parameter.month[12].absMinTemp);
console.log("Precipitación total (mm): " + parameter.month[12].totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.month[12].rainDays);
console.log("Horas de sol: " + parameter.month[12].sunHours);
console.log("Humedad relativa (%): " + parameter.month[12].relativeHumidity);
console.log();

console.log("Fuente n. °1: NOAA, Servicio Meteorológico Nacional (precipitatión days)");