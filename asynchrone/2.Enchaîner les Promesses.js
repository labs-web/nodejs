function getData() {
    return new Promise((resolve, reject) => {
      // Simuler une requête réseau
      setTimeout(() => {
        resolve('Données récupérées');
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      // Traiter les données
      setTimeout(() => {
        resolve(`Données traitées : ${data}`);
      }, 500);
    });
  }
  
  getData()
    .then(data => processData(data))
    .then(result => console.log(result))
    .catch(error => console.error(error));