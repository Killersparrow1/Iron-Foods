const fs = require('fs');
const path = require('path');

const foodsDir = path.join(__dirname, '../foods');
const commonDir = path.join(__dirname, '../common');
const outputFile = path.join(__dirname, '../search-index.json');

const allFoods = [];

function loadDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.json')) {
            const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
            allFoods.push(...data);
        }
    });
}

loadDir(foodsDir);
loadDir(commonDir);

fs.writeFileSync(outputFile, JSON.stringify(allFoods, null, 2));
console.log('Search index generated.');
