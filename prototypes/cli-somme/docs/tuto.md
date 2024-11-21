Voici un tutoriel étape par étape pour créer une ligne de commande PowerShell (ou compatible avec tout terminal) à l'aide d'un package npm. Le package prendra deux valeurs en entrée, calculera leur somme et affichera le résultat.

---

### Étape 1 : Initialiser un nouveau projet npm

1. Créez un nouveau dossier pour votre projet :
   ```bash
   mkdir calc-cli
   cd calc-cli
   ```

2. Initialisez un projet npm :
   ```bash
   npm init -y
   ```

   Cela crée un fichier `package.json` de base.

---

### Étape 2 : Configurer le champ `bin` dans `package.json`

Modifiez le fichier `package.json` pour inclure une section `bin`. Cette section mappe le nom de la commande CLI (par exemple, `calc`) au script exécutable. Exemple de configuration :

```json
{
  "name": "calc-cli",
  "version": "1.0.0",
  "description": "Un outil CLI simple pour calculer la somme de deux nombres",
  "main": "index.js",
  "bin": {
    "calc": "./bin/calc.js"
  },
  "author": "Votre Nom",
  "license": "MIT"
}
```

---

### Étape 3 : Créer le fichier exécutable CLI

1. Créez un répertoire `bin` et un fichier pour votre script :
   ```bash
   mkdir bin
   touch bin/calc.js
   ```

2. Ouvrez `bin/calc.js` dans un éditeur de texte et ajoutez le code suivant :

   ```javascript
   #!/usr/bin/env node

   // Importer les arguments depuis la ligne de commande
   const args = process.argv.slice(2);

   // Vérifier qu'il y a bien deux arguments
   if (args.length !== 2) {
       console.error("Usage: calc <nombre1> <nombre2>");
       process.exit(1);
   }

   // Convertir les arguments en nombres
   const num1 = parseFloat(args[0]);
   const num2 = parseFloat(args[1]);

   // Vérifier que les entrées sont valides
   if (isNaN(num1) || isNaN(num2)) {
       console.error("Erreur : Veuillez entrer deux nombres valides.");
       process.exit(1);
   }

   // Calculer la somme
   const sum = num1 + num2;

   // Afficher le résultat
   console.log(`La somme de ${num1} et ${num2} est : ${sum}`);
   ```

3. Assurez-vous d'ajouter le **shebang** (`#!/usr/bin/env node`) en haut du fichier pour indiquer qu'il s'agit d'un script Node.js.

4. Rendez le fichier exécutable (nécessaire uniquement sur les systèmes Unix/Linux/MacOS) :
   ```bash
   chmod +x bin/calc.js
   ```

---

### Étape 4 : Tester en local

1. Installez le package globalement pour tester votre commande :
   ```bash
   npm install -g .
   ```

2. Testez votre commande en entrant deux nombres :
   ```bash
   calc 5 10
   ```

   Cela devrait afficher :
   ```
   La somme de 5 et 10 est : 15
   ```

---

### Étape 5 : Ajouter des validations supplémentaires (optionnel)

Pour rendre votre outil plus robuste, vous pouvez :
- Gérer des erreurs pour des entrées non numériques.
- Ajouter une commande d’aide (`--help`).
- Fournir des options pour d'autres opérations (comme la soustraction, multiplication, etc.).

---

### Étape 6 : Publier votre package (optionnel)

Si vous souhaitez partager votre outil, publiez-le sur npm :
1. Connectez-vous à npm :
   ```bash
   npm login
   ```

2. Publiez le package :
   ```bash
   npm publish
   ```

Les autres utilisateurs pourront ensuite installer et utiliser votre outil avec :
```bash
npm install -g calc-cli
```

---

### Résultat attendu

1. Commande :
   ```bash
   calc 7 3
   ```

2. Sortie :
   ```
   La somme de 7 et 3 est : 10
   ```

Avec ce tutoriel, vous avez créé un outil CLI simple et fonctionnel avec Node.js et npm, utilisable dans PowerShell ou tout autre terminal compatible. 🎉