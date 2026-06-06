const fs = require('fs');
const path = require('path');

const foodsDir = path.join(__dirname, '../foods');
const commonDir = path.join(__dirname, '../common');
const outputFile = path.join(__dirname, '../search-index.json');

function normalize(str) {
    return str.toLowerCase().trim();
}

function generateIndex() {
    const searchIndex = [];

    function processDir(dir) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.json')) {
                const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
                data.forEach(food => {
                    const terms = new Set();
                    // Add all names
                    Object.values(food.names).forEach(n => terms.add(normalize(n)));
                    // Add all aliases
                    if (food.aliases) {
                        food.aliases.forEach(a => terms.add(normalize(a)));
                    }
                    searchIndex.push({
                        id: food.id,
                        search_terms: Array.from(terms),
                        category: food.category
                    });
                });
            }
        });
    }

    processDir(foodsDir);
    processDir(commonDir);

    fs.writeFileSync(outputFile, JSON.stringify(searchIndex, null, 2));
    console.log('Search index generated successfully.');
}

generateIndex();
