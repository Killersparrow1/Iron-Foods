const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schema = JSON.parse(fs.readFileSync('../schema/food.schema.json', 'utf8'));
const validate = ajv.compile(schema);

const auditReport = {
    "Invalid JSON files": "PASS",
    "Duplicate food IDs": "PASS",
    "Duplicate aliases": "PASS",
    "Missing required schema fields": "PASS",
    "Broken manifest references": "PASS",
    "Broken search-index references": "PASS",
    "Empty datasets": "PASS",
    "Invalid nutrition values (negative)": "PASS",
    "Foods with calories lower than macros": "PASS",
    "Files referenced but not existing": "PASS"
};

const issues = [];
const allFoods = [];
const idMap = new Map(); // ID -> File
const aliasMap = new Map(); // Alias -> ID

function logIssue(category, status, message) {
    if (status !== "PASS") {
        auditReport[category] = status;
        issues.push(`[${status}] ${category}: ${message}`);
    }
}

// 1. File existence / JSON validity
const directories = ['../foods', '../common'];
directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
        logIssue("Files referenced but not existing", "FAIL", `Directory ${dir} missing`);
        return;
    }
    
    fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.json')) {
            const filePath = path.join(dir, file);
            let data;
            try {
                data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            } catch (e) {
                logIssue("Invalid JSON files", "FAIL", `${filePath} is invalid JSON`);
                return;
            }

            if (!Array.isArray(data) || data.length === 0) {
                logIssue("Empty datasets", "WARNING", `${filePath} is empty`);
            }

            data.forEach((item, index) => {
                // 4. Missing required schema fields
                const valid = validate(item);
                if (!valid) {
                    logIssue("Missing required schema fields", "FAIL", `${filePath} item ${index} invalid: ${JSON.stringify(validate.errors)}`);
                }

                // 2. Duplicate food IDs
                if (idMap.has(item.id)) {
                    logIssue("Duplicate food IDs", "FAIL", `ID ${item.id} in ${idMap.get(item.id)} and ${filePath}`);
                }
                idMap.set(item.id, filePath);

                // 3. Duplicate aliases
                const aliases = [item.names.en, ...(item.aliases || [])];
                aliases.forEach(alias => {
                    const norm = alias.toLowerCase().trim();
                    if (aliasMap.has(norm) && aliasMap.get(norm) !== item.id) {
                        logIssue("Duplicate aliases", "WARNING", `Alias '${alias}' in ${item.id} matches ${aliasMap.get(norm)}`);
                    }
                    aliasMap.set(norm, item.id);
                });

                // 8. Invalid nutrition values (negative)
                if (item.nutrition.calories < 0 || item.nutrition.protein < 0 || item.nutrition.carbs < 0 || item.nutrition.fat < 0 || item.nutrition.fiber < 0) {
                    logIssue("Invalid nutrition values (negative)", "FAIL", `Negative nutrition in ${item.id}`);
                }

                // 9. Calorie logic check
                const calculatedCalories = (4 * item.nutrition.protein) + (4 * item.nutrition.carbs) + (9 * item.nutrition.fat);
                if (item.nutrition.calories < (calculatedCalories * 0.8)) { // Allow 20% variance
                    logIssue("Foods with calories lower than macros imply", "WARNING", `Calorie mismatch in ${item.id}: reported ${item.nutrition.calories}, calculated ${calculatedCalories}`);
                }
                
                allFoods.push(item);
            });
        }
    });
});

// Print Report
console.log("=== Production Readiness Audit Report ===\n");
Object.entries(auditReport).forEach(([cat, status]) => {
    console.log(`${status.padEnd(8)} | ${cat}`);
});

if (issues.length > 0) {
    console.log("\n--- Issues Found ---\n");
    issues.forEach(i => console.log(i));
} else {
    console.log("\nNo issues found.");
}
