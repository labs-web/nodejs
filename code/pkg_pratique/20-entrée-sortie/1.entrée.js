const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

// console.log("La somme de deux valeurs x et y ");

var x = null;
var y = null;

rl.question('Donnez la valeur de x : ',  (a) => {
	x = a;

	rl.question('Donnez la valeur de y : ',  (b) => {
		y = b;
		rl.close();
	});
});


 let z = x + y;
console.log(z);