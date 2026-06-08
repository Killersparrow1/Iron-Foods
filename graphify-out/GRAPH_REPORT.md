# Graph Report - .  (2026-06-07)

## Corpus Check
- Corpus is ~48,246 words - fits in a single context window. You may not need a graph.

## Summary
- 253 nodes · 195 edges · 64 communities (50 shown, 14 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Schema|Schema]]
- [[_COMMUNITY_Schema|Schema]]
- [[_COMMUNITY_Schema|Schema]]
- [[_COMMUNITY_Schema|Schema]]
- [[_COMMUNITY_Schema|Schema]]
- [[_COMMUNITY_Scripts|Scripts]]
- [[_COMMUNITY_Scripts|Scripts]]
- [[_COMMUNITY_Scripts|Scripts]]
- [[_COMMUNITY_Scripts|Scripts]]
- [[_COMMUNITY_Scripts|Scripts]]
- [[_COMMUNITY_Scripts|Scripts]]
- [[_COMMUNITY_Docs|Docs]]
- [[_COMMUNITY_Docs|Docs]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]
- [[_COMMUNITY_Data|Data]]

## God Nodes (most connected - your core abstractions)
1. `names` - 5 edges
2. `confidence` - 4 edges
3. `aliases` - 4 edges
4. `states` - 4 edges
5. `nutrition` - 4 edges
6. `metadata` - 4 edges
7. `search_terms` - 4 edges
8. `en` - 3 edges
9. `ta` - 3 edges
10. `ml` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Dataset Guidelines` --conceptually_related_to--> `Source Reliability Hierarchy`  [INFERRED]
  docs/DATASET_GUIDELINES.md → docs/SOURCE_POLICY.md
- `Contributing Guide` --references--> `Contributors`  [EXTRACTED]
  docs/CONTRIBUTING.md → docs/CONTRIBUTORS.md
- `Contributing Guide` --references--> `Dataset Guidelines`  [EXTRACTED]
  docs/CONTRIBUTING.md → docs/DATASET_GUIDELINES.md
- `Maintainers` --references--> `Data Quality Policy`  [EXTRACTED]
  docs/MAINTAINERS.md → docs/DATA_QUALITY_POLICY.md
- `Review Process` --references--> `Data Quality Policy`  [EXTRACTED]
  docs/REVIEW_PROCESS.md → docs/DATA_QUALITY_POLICY.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Food Data Files** — foods_telangana_data, foods_tripura_data, foods_uttar_pradesh_data, foods_uttarakhand_data, foods_west_bengal_data [INFERRED 0.85]
- **Governance & Quality Ecosystem** — docs_governance, docs_review_process, docs_data_quality_policy, docs_maintainers [INFERRED 0.85]

## Communities (64 total, 14 thin omitted)

### Community 0 - "Schema"
Cohesion: 0.08
Nodes (24): description, items, type, description, type, description, description, type (+16 more)

### Community 1 - "Schema"
Cohesion: 0.10
Nodes (20): description, type, description, type, description, type, description, properties (+12 more)

### Community 2 - "Schema"
Cohesion: 0.12
Nodes (16): type, maximum, minimum, type, description, type, items, properties (+8 more)

### Community 3 - "Schema"
Cohesion: 0.12
Nodes (16): description, type, format, type, type, properties, description, last_updated (+8 more)

### Community 4 - "Schema"
Cohesion: 0.12
Nodes (16): type, description, type, items, properties, required, type, category (+8 more)

### Community 5 - "Scripts"
Cohesion: 0.12
Nodes (11): allFoods, commonDir, foodsDir, fs, outputFile, path, commonDir, foodsDir (+3 more)

### Community 6 - "Scripts"
Cohesion: 0.12
Nodes (12): description, last_updated, license, name, version, commonFiles, fs, indexData (+4 more)

### Community 7 - "Scripts"
Cohesion: 0.14
Nodes (14): type, type, type, type, properties, required, type, calories (+6 more)

### Community 8 - "Scripts"
Cohesion: 0.14
Nodes (12): addFormats, Ajv, aliasMap, allFoods, auditReport, directories, fs, idMap (+4 more)

### Community 9 - "Scripts"
Cohesion: 0.18
Nodes (11): properties, required, type, metadata, source, source_reference, source_reliability, type (+3 more)

### Community 10 - "Scripts"
Cohesion: 0.18
Nodes (8): addFormats, Ajv, allFoods, directories, fs, path, schema, validate

### Community 11 - "Docs"
Cohesion: 0.40
Nodes (5): Contributing Guide, Contributors, Dataset Guidelines, Source Policy, Source Reliability Hierarchy

### Community 12 - "Docs"
Cohesion: 0.40
Nodes (5): Data Quality Policy, Governance, Maintainers, Multilingual Policy, Review Process

### Community 14 - "Data"
Cohesion: 0.50
Nodes (3): dependencies, ajv, ajv-formats

## Knowledge Gaps
- **137 isolated node(s):** `BeforeTool`, `fs`, `path`, `Ajv`, `addFormats` (+132 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `properties` connect `Schema` to `Scripts`, `Schema`, `Scripts`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Why does `names` connect `Schema` to `Schema`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `BeforeTool`, `fs`, `path` to the rest of the system?**
  _137 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._