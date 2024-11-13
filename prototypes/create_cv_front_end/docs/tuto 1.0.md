Voici un tutoriel pour transformer le script de création d'un CV en une application web complète, en ajoutant un backend en Node.js (avec Express pour simplifier la gestion des requêtes HTTP) et un frontend en HTML/CSS/JavaScript.

### Étape 1 : Initialiser le projet

1. **Créer le dossier du projet** et initialisez-le avec npm :
    ```bash
    mkdir cv-generator-web
    cd cv-generator-web
    npm init -y
    ```

2. **Installer les dépendances nécessaires** :
    ```bash
    npm install express ejs
    ```

### Étape 2 : Structurer le projet

Organisez le projet avec les dossiers suivants :
```
cv-generator-web/
├── data/
│   └── madani_ali.json          # Exemples de fichiers JSON pour les CV
├── public/
│   ├── css/
│   │   └── style.css            # Styles pour le frontend
│   └── js/
│       └── script.js            # Scripts pour le frontend
├── templates/
│   └── cv.ejs                   # Template EJS pour le CV
├── views/
│   └── index.ejs                # Page d'accueil pour l'interface utilisateur
├── app.js                       # Point d'entrée principal du backend
└── package.json
```

### Étape 3 : Créer le backend avec Node.js et Express

1. **Configurer Express et les routes backend** dans `app.js` :
    ```js
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
        res.status(500).send('Erreur lors de la génération du CV.');
      }
    });

    // Configurer EJS comme moteur de templates pour le backend
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
    ```

2. **Créer un fichier JSON de test** dans `data/madani_ali.json` :
    ```json
    {
      "name": "Madani Ali",
      "experience": 10,
      "location": "Tangier",
      "skills": ["Laravel", "PHP", "JavaScript", "HTML", "CSS"]
    }
    ```

3. **Créer un template EJS** dans `templates/cv.ejs` :
    ```html
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>CV de <%= name %></title>
    </head>
    <body>
        <h1>CV de <%= name %></h1>
        <p><strong>Expérience :</strong> <%= experience %> ans</p>
        <p><strong>Localisation :</strong> <%= location %></p>
        <h2>Compétences :</h2>
        <ul>
            <% skills.forEach(skill => { %>
                <li><%= skill %></li>
            <% }); %>
        </ul>
    </body>
    </html>
    ```

### Étape 4 : Créer le frontend

1. **Créer la page d'accueil** dans `views/index.ejs` :
    ```html
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Générateur de CV</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <h1>Générateur de CV</h1>
        <form id="cvForm">
            <label for="fileName">Nom du fichier JSON :</label>
            <input type="text" id="fileName" required>
            <button type="submit">Générer le CV</button>
        </form>
        <div id="cvOutput"></div>
        <script src="/js/script.js"></script>
    </body>
    </html>
    ```

2. **Créer le script JavaScript pour gérer la soumission du formulaire** dans `public/js/script.js` :
    ```js
    document.getElementById('cvForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      const fileName = document.getElementById('fileName').value;

      try {
        const response = await fetch('/generate-cv', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fileName })
        });

        if (response.ok) {
          const cvHtml = await response.text();
          document.getElementById('cvOutput').innerHTML = cvHtml;
        } else {
          document.getElementById('cvOutput').innerHTML = 'Erreur lors de la génération du CV.';
        }
      } catch (error) {
        console.error(error);
        document.getElementById('cvOutput').innerHTML = 'Erreur lors de la génération du CV.';
      }
    });
    ```

3. **Créer un fichier CSS basique** dans `public/css/style.css` :
    ```css
    body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: auto;
        padding: 20px;
    }

    h1 {
        color: #333;
    }

    form {
        margin-bottom: 20px;
    }

    #cvOutput {
        border: 1px solid #ddd;
        padding: 20px;
        margin-top: 20px;
    }
    ```

### Étape 5 : Lancer et tester l'application

1. **Démarrer le serveur** avec la commande suivante :
    ```bash
    node app.js
    ```

2. **Accéder à l'application** en ouvrant un navigateur à l'adresse [http://localhost:3000](http://localhost:3000). Entrez le nom du fichier JSON (par exemple, `madani_ali`) et cliquez sur le bouton pour générer le CV.

### Résultat attendu
L'interface affiche le formulaire permettant de saisir le nom d'un fichier JSON. En soumettant le formulaire, le frontend envoie la requête au backend, qui génère et renvoie le contenu HTML du CV, affiché ensuite dans la page.