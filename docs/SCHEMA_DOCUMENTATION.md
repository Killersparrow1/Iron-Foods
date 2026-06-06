# Schema Documentation

This document describes the canonical JSON schema used for all food items in Iron Foods.

## Food Item Object
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique identifier (slug). |
| `names` | `object` | Multilingual names (`en`, `ta`, `ml`, etc.). |
| `aliases` | `array` | Alternative names and common misspellings. |
| `states` | `array` | Associated states/UTs. |
| `category` | `string` | Food category. |
| `serving_g` | `number` | Reference serving size in grams. |
| `nutrition` | `object` | Nutritional values per 100g. |
| `metadata` | `object` | Source information. |

### Nutrition Object
- `calories`: Number
- `protein`: Number (g)
- `carbs`: Number (g)
- `fat`: Number (g)
- `fiber`: Number (g)

### Metadata Object
- `source`: String (e.g., "IFCT-2017")
- `source_reference`: String (e.g., "Table 7.2")
- `source_reliability`: Enum ("institutional", "cited", "community")
