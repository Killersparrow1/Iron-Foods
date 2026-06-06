const fs = require('fs');
const path = require('path');

const stateFiles = [
    'andaman-nicobar.json', 'andhra-pradesh.json', 'arunachal-pradesh.json', 'assam.json', 'bihar.json',
    'chandigarh.json', 'chhattisgarh.json', 'dadra-nagar-haveli-daman-diu.json', 'delhi.json', 'goa.json',
    'gujarat.json', 'haryana.json', 'himachal-pradesh.json', 'jammu-kashmir.json', 'jharkhand.json',
    'karnataka.json', 'kerala.json', 'ladakh.json', 'lakshadweep.json', 'madhya-pradesh.json',
    'maharashtra.json', 'manipur.json', 'meghalaya.json', 'mizoram.json', 'nagaland.json',
    'odisha.json', 'puducherry.json', 'punjab.json', 'rajasthan.json', 'sikkim.json',
    'tamil-nadu.json', 'telangana.json', 'tripura.json', 'uttar-pradesh.json', 'uttarakhand.json', 'west-bengal.json'
];

const commonFiles = [
    'bakery-items.json', 'beverages.json', 'condiments-and-spices.json', 'dairy.json', 'desserts.json',
    'eggs-and-protein.json', 'fast-food.json', 'fruits.json', 'grains-and-cereals.json', 'gym-staples.json',
    'legumes-and-pulses.json', 'meat-and-seafood.json', 'nuts-and-seeds.json', 'oils-and-fats.json',
    'snacks.json', 'vegetables.json'
];

const results = {
    totalFoods: 0,
    foodsPerState: {},
    foodsPerCommon: {},
    totalAliases: 0,
    totalMultilingual: 0,
    duplicateIDs: [],
    suspiciousNutrition: [],
    allFoods: []
};

function processFile(filePath, isCommon) {
    if (!fs.existsSync(filePath)) return null;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.forEach(food => {
        results.totalFoods++;
        if (isCommon) {
            results.foodsPerCommon[path.basename(filePath)] = (results.foodsPerCommon[path.basename(filePath)] || 0) + 1;
        } else {
            results.foodsPerState[path.basename(filePath)] = (results.foodsPerState[path.basename(filePath)] || 0) + 1;
        }
        
        results.totalAliases += (food.aliases || []).length;
        if (food.names && Object.keys(food.names).length > 1) results.totalMultilingual++;

        // Quality Checks
        const n = food.nutrition;
        if (n.calories === 0) results.suspiciousNutrition.push({id: food.id, msg: "Calories 0"});
        if (n.protein > n.calories / 4) results.suspiciousNutrition.push({id: food.id, msg: "Protein > Calories"});
        if (n.fat > 100 || n.carbs > 100) results.suspiciousNutrition.push({id: food.id, msg: "Macro > 100g"});
        
        results.allFoods.push(food);
    });
    return data;
}

stateFiles.forEach(f => processFile(path.join('../foods', f), false));
commonFiles.forEach(f => processFile(path.join('../common', f), true));

// Search Index
const indexData = JSON.parse(fs.readFileSync('../search-index.json', 'utf8'));

console.log("=== DATASET VERIFICATION ===");
console.log(`Total foods: ${results.totalFoods}`);
console.log(`Foods per State/UT: ${JSON.stringify(results.foodsPerState, null, 2)}`);
console.log(`Foods per Common: ${JSON.stringify(results.foodsPerCommon, null, 2)}`);
console.log(`Total Aliases: ${results.totalAliases}`);
console.log(`Total Multilingual: ${results.totalMultilingual}`);

console.log("\n=== SEARCH INDEX VERIFICATION ===");
console.log(`Total index entries: ${indexData.length}`);
console.log(`Foods missing from index: ${results.totalFoods - indexData.length}`);

console.log("\n=== QUALITY VERIFICATION (Suspicious Nutrition) ===");
results.suspiciousNutrition.forEach(s => console.log(`${s.id}: ${s.msg}`));

console.log("\n=== RANDOM SAMPLING ===");
const shuffledStates = stateFiles.sort(() => 0.5 - Math.random()).slice(0, 10);
shuffledStates.forEach(sf => {
    console.log(`\nState: ${sf}`);
    const data = JSON.parse(fs.readFileSync(path.join('../foods', sf), 'utf8'));
    data.slice(0, 5).forEach(f => console.log(JSON.stringify(f)));
});
