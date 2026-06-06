# Search Documentation

Iron Foods utilizes a client-side search engine optimized for Indian food terminology.

## Search Index
- The `search-index.json` file is a flattened array of food items containing only essential search fields (`id`, `search_terms`, `category`).
- `search_terms` combines English names, native-language names, and aliases, normalized to lowercase for typo-tolerant fuzzy matching.

## Supported Searches
- **Exact Search:** Matches against the `id` or normalized `search_terms`.
- **Fuzzy Search:** Handles minor typos (e.g., "idlee" instead of "idli").
- **Prefix Search:** Supports partial keyword matches.
- **Alias Search:** Aliases and transliterations (e.g., Malayalam, Tamil, Hindi) resolve to the same canonical `id`.

## Integration
Applications should fetch the `search-index.json` and use a client-side library like `Fuse.js` or similar for real-time search functionality.
