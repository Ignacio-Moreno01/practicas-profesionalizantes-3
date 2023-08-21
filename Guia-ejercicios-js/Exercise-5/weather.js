const parameter = { 
	month: [
		{ name: 'Enero'},
		{ name: 'Febrero'},
		{ name: 'Marzo'},
		{ name: 'Abril'},
		{ name: 'Mayo'},
		{ name: 'Junio'},
		{ name: 'Julio'},
		{ name: 'Agosto'},
		{ name: 'Septiembre'},
		{ name: 'Octubre'},
		{ name: 'Noviembre'},
		{ name: 'Diciembre'},
		{ name: 'Anual'}	
	],
	maxTemp: 36.3,
	mediumMaxTemp: 23.7,
	mediumTemp: 18.0,
	mediumMinTemp: 12.5,
	absMinTemp: 1.9,
	totalRain: 107.0,
	rainDays: 9,
	sunHours: 232.5,
	relativeHumidity: 79
}

console.log("Mes: " + parameter.month[2].name);
console.log("Temperatura máxima (°C): " + parameter.maxTemp);
console.log("Temperatura máxima media (°C): " + parameter.mediumMaxTemp);
console.log("Temperatura media (°C): " + parameter.mediumTemp);
console.log("Temperatura mínima media (°C): " + parameter.mediumMinTemp);
console.log("Temperatura mínima absorvida (°C): " + parameter.absMinTemp);
console.log("Precipitación total (mm): " + parameter.totalRain);
console.log("Días de precipitaciones (>= 0.1 mm): " + parameter.rainDays);
console.log("Horas de sol: " + parameter.sunHours);
console.log("Humedad relativa (%): " + parameter.relativeHumidity);

console.log("Fuente n. °1: NOAA, Servicio Meteorológico Nacional (precipitatión days)");