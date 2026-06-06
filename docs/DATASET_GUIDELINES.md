# Dataset Guidelines

Follow these guidelines when contributing new food data to Iron Foods.

## Structure
- All new foods must follow the `schema/food.schema.json`.
- Do not use placeholders or dummy entries.
- Use regional/common datasets appropriately.

## Fields
- **id:** Must be unique and hyphenated (e.g., `idli`).
- **names:** Must include English (`en`) and the appropriate native language code.
- **nutrition:** All values (calories, protein, carbs, fat, fiber) must be normalized per 100g.
- **metadata:** Must include `source`, `source_reference`, and `source_reliability` (one of `institutional`, `cited`, `community`).

## Multilingual Standards
- Always provide the English name as the canonical entry.
- Transliteration should be standardized to common regional usage.
