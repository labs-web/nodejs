const readline = require("readline");
const ApprenantManager = require("./Managers/ApprenantManager");
const Add = ApprenantManager.Add;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const gestion_apprenants = async () => {

  var choix = ""

  while (choix != "q"){
    choix = await askQuestion("Menu :  \n \t a : Ajouter \n \t s: Supprimer \n \t q: Quitter \n");

    switch (choix) {
      case 'a':
        first_name = await askQuestion("Donner le nom: ");
        last_name = await askQuestion("Donnez le prénom: ");
        Add(first_name, last_name);
        break;
      case 's':
        id = await askQuestion("Donner l'identifiant: ");
        Delete(id);
        break;
      case 'q':
        break;
      default:
        break;
    }
  }

  rl.close();
};

gestion_apprenants();
