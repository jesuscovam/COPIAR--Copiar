const colors = require('colors'); // color
const clipboardy = require('clipboardy'); // copiar

function formatear(variable) { 					// de "XXX XXX XXX" => "Xxx Xxx Xxx"
	let  palabras = variable;
	palabras = palabras.toLowerCase(); // XXX XXX XXX => xxx xxx xxx
	lista1 = palabras.split(" ");
	lista2 = [];
	for(let i = 0; i <lista1.length; i++) {
		lista2.push(lista1[i].charAt(0).toUpperCase() + lista1[i].substr(1));

	}
	palabras = lista2.join(" "); 					// xxx xxx xxx => Xxx Xxx Xxx
	clipboardy.writeSync(palabras);
	console.log(palabras.green);
}

module.exports = {
	formatear: formatear
};

