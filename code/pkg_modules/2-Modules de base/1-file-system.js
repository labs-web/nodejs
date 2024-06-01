const fs = require('fs');

fs.readFile('produits.csv', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});