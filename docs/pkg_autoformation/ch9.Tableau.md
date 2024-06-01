---
layout: default
chapitre: true
package: pkg_autoformation
order: 103
---

# Chapitre  : Tableau


## Objectifs 

- Utilisation des variables 
- Utilisation des paramètres d'un script


## Paramètre d'un script 

Node.js prend en charge une liste d'arguments passés, connus sous le nom de vecteur d'argument. Le vecteur d'argument est un tableau disponible sur **process.argv** dans votre script node.js.

Le tableau contient tout ce qui est passé au script, y compris l'exécutable Node.js et le chemin et le nom de fichier du script.

````js
console.log(process.argv)

````