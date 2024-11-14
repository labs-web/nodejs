const fs = require('fs');
const ejs = require('ejs');

// Charger le fichier JSON
const cvData = JSON.parse(fs.readFileSync('cv.json', 'utf-8'));

// Charger le template EJS
const template = fs.readFileSync('template.ejs', 'utf-8');

// Générer le CV en injectant les données
const renderedCV = ejs.render(template, cvData);

// Sauvegarder le CV dans un fichier HTML
fs.writeFileSync('CV_Madani_Ali.html', renderedCV);

console.log('Le CV a été généré avec succès : CV_Madani_Ali.html');