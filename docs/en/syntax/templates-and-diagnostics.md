# Templates & Diagnostics

## Three-Tier Template Inheritance

Clado merges templates in priority order:
1. **Workspace**: `<workspace>/.clado/templates/`
2. **Parent directories**: team/repo `.clado/templates/`
3. **User library**: `~/.clado/templates/` (7 official templates: `call-chain`, `business-flow`, `data-design`, `requirement-overview`, `system-state`, `mind-expansion`, `test-cases`)

## Real-Time Parser Diagnostics

Every render, build, and MCP write returns deterministic diagnostics:

| Code | Severity | Meaning |
| --- | --- | --- |
| `MD_NO_CARD` | `error` / `warn` | Missing `#` card heading or subheading before first `#` |
| `MD_CARD_ISOLATED` | `error` | Unconnected card during `clado build` (single-card canvas exempt) |
| `MD_EDGE_AMBIGUOUS` | `error` | Multiple headings match the same link target |
| `MD_TAG_DUPLICATE_ID` | `error` | Duplicate `#tagId` defined in the same document |
| `MD_MEDIA_LINK_SOURCE` / `TARGET` | `error` | `clado:` source or target anchor could not be matched |
| `MD_CONTENT_LONG` | `warn` | Block exceeds 400 visible characters (code blocks & Tag attributes excluded) |
