const receipt = {
	products : [
		{ name: 'UGL 5- CAPITA SALUD MENTAL', period: '06/16'},
		{ name: 'AJUSTE COMPLEMENTARIO', period: '02/16'},
		{ name: 'AJUSTE COMPLEMENTARIO', period: '03/16'},
		{ name: 'AJUSTE COMPLEMENTARIO', period: '04/16'},
		{ name: 'AJUSTE COMPLEMENTARIO', period: '05/16'}
	],
	amount: 1.00,
	sizeUnit: 'Otras Unidades',
	priceUnit: 264002.11,
	bonif: 0.00,
	bonifImport: 0.00,
	subtotal: 264002.11,
	total: 264002.11
}

console.log("Producto/Servicio: " + receipt.products[0].name + " / Periodo: " + receipt.products[0].period);
console.log("Cantidad: " + receipt.amount);
console.log("Unidad de medida: " + receipt.sizeUnit);
console.log("Precio de la unidad: " + receipt.priceUnit);
console.log("Bonificación: " + receipt.bonif);
console.log("Impuesto de bonificación: " + receipt.bonifImport);
console.log("Subtotal: " + receipt.subtotal);
console.log("Total: " + receipt.total);