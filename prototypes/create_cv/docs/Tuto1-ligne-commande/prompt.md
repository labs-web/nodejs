# Prompt v 1.1 


Voici le prompt complet pour générer un tutoriel sur la création d'un générateur de CV à partir d'un fichier JSON en utilisant Node.js, EJS (sans Express) et en ligne de commande :

---

**Prompt :** 

Créer un tutoriel expliquant comment générer un CV HTML à partir de données JSON en utilisant Node.js et EJS sans utiliser Express. Le tutoriel doit inclure les éléments suivants :

1. **Présentation du projet** : 
   - Expliquer le but du générateur de CV et les technologies utilisées (Node.js, EJS, JSON).
   
2. **Exemple de données JSON** pour un CV fictif :
   - Un fichier JSON nommé `cv.json` contenant les informations de base d'un CV pour "Madani Ali", un développeur Laravel avec 10 ans d'expérience. Ce fichier doit inclure :
     - **État civil** : nom, prénom, poste, années d'expérience, ville, email, et téléphone.
     - **Diplômes** : liste des diplômes avec année, titre, et établissement.
     - **Compétences** : liste de compétences.
     - **Expériences professionnelles** : liste d'expériences avec poste, entreprise, années, et description.

3. **Template HTML avec Bootstrap** :
   - Fournir un fichier `template.html` avec un design professionnel et minimaliste, utilisant Bootstrap pour la mise en page. Inclure des sections pour les informations personnelles, diplômes, compétences, et expériences.

4. **Transformation en template EJS** :
   - Montrer comment convertir le template HTML en template EJS (`template.ejs`) pour permettre l'injection de données JSON.

5. **Script Node.js pour la génération du CV** :
   - Fournir un script Node.js (`generate-cv.js`) qui :
     - Charge les données du fichier `cv.json`.
     - Charge le template `template.ejs`.
     - Utilise EJS pour injecter les données JSON dans le template.
     - Génère un fichier HTML (`CV_Madani_Ali.html`) contenant le CV rendu.

6. **Instructions de ligne de commande** :
   - Expliquer comment exécuter le script en ligne de commande pour générer le CV final.
   - Inclure l'installation de dépendances (`npm install ejs`) et la commande pour lancer le script (`node generate-cv.js`).

7. **Conclusion** :
   - Résumer le processus et proposer des pistes d’améliorations, comme l’ajout de styles personnalisés ou l’automatisation de la génération pour plusieurs profils.

---

En suivant ce prompt, le lecteur pourra obtenir un tutoriel clair et détaillé pour créer un générateur de CV en ligne de commande avec Node.js et EJS.

# Prompt v 1.0

Créer un tutoriel pour la création d'un générateur de CV à partie d'un fichier JSON en utilisant Node JS, EJS sans utiliser express, en utilisation de ligne de commande.

- Donner un exemple de CV de Madani Ali en JSON avec 
  - état civile, 
  - diplômes
  - compétences 
  - expériences
Madani ali est un développeur informatique de Laravel avec exéprence de 10 ans d'expérience à Tanger.

- Donner le template en HTML et CSS pour l'affichage de CV en utilisant Bootstrap avec un UX optimale
- Donner aprés le template EJS à utiliser pour la génération de CV 

- Donner le code JS pour la génération de CV en utilisant le fichier JSON et le template EJS.
