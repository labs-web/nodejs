const fs = require('fs').promises; // Import promises version of fs

async function app(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);   

  }
}

console.log("avant");
app('myFile.txt');
console.log("après");