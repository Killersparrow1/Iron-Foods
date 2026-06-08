# Graph Report - scripts  (2026-06-07)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 24 nodes · 22 edges · 3 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d2f1c561`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]

## God Nodes (most connected - your core abstractions)
1. `fs` - 1 edges
2. `path` - 1 edges
3. `foodsDir` - 1 edges
4. `commonDir` - 1 edges
5. `outputFile` - 1 edges
6. `allFoods` - 1 edges
7. `fs` - 1 edges
8. `path` - 1 edges
9. `foodsDir` - 1 edges
10. `commonDir` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (3 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (7): addFormats, Ajv, allFoods, directories, fs, path, schema

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (6): allFoods, commonDir, foodsDir, fs, outputFile, path

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (5): commonDir, foodsDir, fs, outputFile, path

## Knowledge Gaps
- **18 isolated node(s):** `fs`, `path`, `foodsDir`, `commonDir`, `outputFile` (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `fs`, `path`, `foodsDir` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._