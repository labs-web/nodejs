---
layout: default
chapitre: true
package: pkg_autoformation
order: 103
---

# Chapitre 4 : Fonctions


## Objectifs 

- Utilisation fonctions

## Variable 

code : 

````js

function somme(a,b){
    const s = a + b;
    return s;
}

let x = 3;
var y = 2;
const z = somme(x,y);

console.log(z);
````

Exécution de code : 

````bash
node 1-fonctions.js
````

Résultat : 

````bash
PS > node 1-fonctions.js
5
````

