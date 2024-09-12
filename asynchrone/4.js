async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Erreur lors de la requête');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur :', error);
      throw error; // Rejeter l'erreur pour la gérer plus haut dans la chaîne d'appel
    }
  }

  async function main() {
    try {
      const data = await getData();
      console.log(data.length);
    } catch (error) {
      console.error('Erreur dans la fonction principale :', error);
    }
  }
  
  main();