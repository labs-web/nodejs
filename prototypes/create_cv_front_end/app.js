const express = require('express');
    const fs = require('fs');
    const ejs = require('ejs');
    const path = require('path');

    const app = express();
    const PORT = 3000;

    // Middleware pour servir les fichiers statiques
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json());

    // Route principale pour la page d'accueil
    app.get('/', (req, res) => {
      res.render('index');
    });

    // Route pour générer le CV à partir des données JSON
    app.post('/generate-cv', (req, res) => {
      const { fileName } = req.body;
      const filePath = path.join(__dirname, 'data', `${fileName}.json`);

      try {
        const cvData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const template = fs.readFileSync(path.join(__dirname, 'templates', 'cv.ejs'), 'utf-8');
        const renderedCV = ejs.render(template, cvData);

        res.send(renderedCV); // Envoyer le CV en HTML au frontend
      } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la génération du CV.' + error);
      }
    });

    // Configurer EJS comme moteur de templates pour le backend
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });