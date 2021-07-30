const fs = require('fs');
const path = require('path');

module.exports = {
    videos : JSON.parse(fs.readFileSync(path.join(__dirname,'videos.json'),'utf-8'))
}