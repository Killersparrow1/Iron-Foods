# Contributing to Iron Foods

## Data Submission
1. Fork the repo.
2. Add new entries to the appropriate file in `foods/` or `common/`.
3. Ensure all fields (`names`, `nutrition`, `metadata`) are populated according to `schema/food.schema.json`.
4. Run `npm run validate` to check schema compliance.
5. Submit a pull request.

## Maintainer/Reviewer Guide
- All submissions must be reviewed for data accuracy and source reliability.
- Entries with `source_reliability: community` require at least one maintainer's approval.
- Ensure no duplicate `id`s exist.

## Source Attribution
- Always cite the original source (e.g., IFCT-2017, USDA, local university study).
- Do not use copyrighted images without explicit permission.
