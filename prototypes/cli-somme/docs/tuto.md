Voici un guide détaillé pour créer un package Node.js répondant à vos besoins, avec un exemple complet.  

### Structure finale du projet  
Voici comment organiser votre projet :  

```
math-cli/
├── bin/
│   └── math-cli.js      # Script CLI
├── src/
│   ├── add.js           # Classe pour addition
│   ├── subtract.js      # Classe pour soustraction
│   └── index.js         # Point d'entrée principal
├── package.json         # Métadonnées du package
└── README.md            # Documentation
```

---

### Étape 1 : Créer le fichier `package.json`  
Utilisez la commande suivante pour initialiser votre projet :  
```bash
npm init -y
```

Cela générera un fichier `package.json`. Modifiez-le pour ajouter un champ `bin`, qui définit la commande CLI :  
```json
{
  "name": "math-cli",
  "version": "1.0.0",
  "description": "A simple CLI for addition and subtraction",
  "main": "src/index.js",
  "bin": {
    "math-cli": "./bin/math-cli.js"
  },
  "type": "module",
  "scripts": {
    "start": "node src/index.js"
  },
  "keywords": ["cli", "math", "nodejs"],
  "author": "Votre Nom",
  "license": "MIT"
}
```

---

### Étape 2 : Créer les classes pour `add` et `subtract`  

#### `src/add.js`  
```javascript
export class Add {
  static calculate(a, b) {
    return a + b;
  }
}
```

#### `src/subtract.js`  
```javascript
export class Subtract {
  static calculate(a, b) {
    return a - b;
  }
}
```

#### `src/index.js`  
```javascript
import { Add } from './add.js';
import { Subtract } from './subtract.js';

export { Add, Subtract };
```

---

### Étape 3 : Écrire le script CLI  

#### `bin/math-cli.js`  
Ajoutez un shebang au début pour permettre l'exécution dans les terminaux :  
```javascript
#!/usr/bin/env node

import { Add } from '../src/add.js';
import { Subtract } from '../src/subtract.js';

// Récupérer les arguments passés à la CLI
const [,, operation, num1, num2] = process.argv;

if (!operation || !num1 || !num2) {
  console.error("Usage: math-cli <operation> <num1> <num2>");
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.error("Error: Both arguments must be valid numbers.");
  process.exit(1);
}

switch (operation) {
  case "add":
    console.log(`Result: ${Add.calculate(a, b)}`);
    break;
  case "subtract":
    console.log(`Result: ${Subtract.calculate(a, b)}`);
    break;
  default:
    console.error("Error: Unsupported operation. Use 'add' or 'subtract'.");
    process.exit(1);
}
```

---

### Étape 4 : Rendre le script CLI exécutable  
Modifiez les permissions du fichier :  
```bash
chmod +x bin/math-cli.js
```

---

### Étape 5 : Tester la CLI localement  
Pour installer le package en global :  
```bash
npm install -g .
```

Ensuite, utilisez la commande CLI :  
```bash
math-cli add 5 3
# Résultat : 8

math-cli subtract 10 4
# Résultat : 6
```

---

### Étape 6 : Importer le module dans un autre projet  

Dans un projet externe :  
```javascript
import { Add, Subtract } from 'math-cli';

console.log(Add.calculate(5, 3));       // Résultat : 8
console.log(Subtract.calculate(10, 4)); // Résultat : 6
```

---

### Étape 7 : Ajouter une documentation (`README.md`)  
```markdown
# Math CLI  

## Description  
Math CLI is a simple command-line tool for performing addition and subtraction.  

## Installation  
1. Clone the repository.  
2. Run `npm install -g` to install globally.  

## Usage  
### CLI  
```bash
math-cli <operation> <num1> <num2>
# Example:
math-cli add 5 3
math-cli subtract 10 4
```

### As a Module  
```javascript
import { Add, Subtract } from 'math-cli';

console.log(Add.calculate(5, 3));
console.log(Subtract.calculate(10, 4));
```