const fs = require('fs');
const path = require('path');

module.exports = {
    contactos : JSON.parse(fs.readFileSync(path.join(__dirname,'contactos.json'),'utf-8'))
}