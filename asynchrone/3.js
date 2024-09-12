fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data.length))
  .catch(error => console.error('Erreur lors de la requête :', error));