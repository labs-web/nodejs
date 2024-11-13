# Prompt v 1.0




Créer un tutoriel expliquant comment convertir le script de création d'un CV à partir d'un fichier JSON et template EJS en une application avec la partie 
- backend 
- Partie front end sans utiliser une framework UI comme React et Vue JS

Le script de création de CV
````js
const fs = require('fs');
const ejs = require('ejs');

// Vérifier si le nom du fichier est passé en argument
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Veuillez spécifier le nom du stagiaire en utilisant la commande : node create_cv <nom_du_stagiaire>');
  process.exit(1);
}

const fileName = args[0];
const filePath = `./data/${fileName}.json`;

// Charger le fichier JSON correspondant au stagiaire
try {
  const cvData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Charger le template EJS
  const template = fs.readFileSync('./template/cv.ejs', 'utf-8');

  // Générer le CV en injectant les données
  const renderedCV = ejs.render(template, cvData);

  // Sauvegarder le CV dans un fichier HTML
  const outputFileName = `CV_${fileName.replace('.', '_')}.html`;
  fs.writeFileSync(outputFileName, renderedCV);

  console.log(`Le CV a été généré avec succès : ${outputFileName}`);
} catch (error) {
  console.error(`Erreur : Impossible de trouver ou lire le fichier ${filePath}. Assurez-vous que le fichier JSON existe et est valide.`);
}

````