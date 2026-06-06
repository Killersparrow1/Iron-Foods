const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schema = JSON.parse(fs.readFileSync('schema/food.schema.json', 'utf8'));
const validate = ajv.compile(schema);

const allFoods = [];

function validateData(dir, file) {
    const filePath = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (!Array.isArray(data)) {
        console.error(`Validation failed for ${filePath}: must be an array.`);
        process.exit(1);
    }
    
    data.forEach((item, index) => {
        const valid = validate(item);
        if (!valid) {
            console.error(`Validation failed for ${filePath} at item ${index}:`, validate.errors);
            process.exit(1);
        }
        allFoods.push({ ...item, sourceFile: filePath });
    });
}

function checkDuplicates(allFoods) {
    const ids = new Set();
    allFoods.forEach(entry => {
        if (ids.has(entry.id)) {
            console.error(`Duplicate ID found: ${entry.id} (in ${entry.sourceFile})`);
            process.exit(1);
        }
        ids.add(entry.id);
    });
}

// Simple runner
const directories = ['foods', 'common'];
directories.forEach(dir => {
    fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.json')) {
            validateData(dir, file);
        }
    });
});

checkDuplicates(allFoods);
console.log('Validation passed.');
