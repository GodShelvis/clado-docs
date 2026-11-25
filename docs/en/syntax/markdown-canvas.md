# Markdown Canvas Spec

Clado stores **100% of canvas structure in plain Markdown**—zero hidden coordinate databases, zero binary lock-in.

## `.md` First, Permanent `.mdc` Compatibility

- Use standard **`.md`** for all new canvas files (works natively in GitHub, VS Code, Obsidian).
- Existing `.mdc` files remain permanently supported across rendering and MCP editing.
- Files under `<workspace>/.clado/doc/` appear automatically in the canvas directory.

## YAML Frontmatter

Frontmatter is optional (headless `.md` files fall back to the first `#` heading) and captures title plus human/AI template rules (`hard_constraints` / `soft_constraints`):

```yaml
---
title: Payment Fulfillment Call Chain
id: call-chain
version: 1
hard_constraints:
  - Each card maps to one cohesive boundary or method
  - Link from specific lines or semantic Tags rather than bare card-to-card tails
---
```

## Heading Hierarchy Mapping

- `#` (**L1**): Card boundary (Cards) / top branch (Mindmap) / major section (Doc).
- `##`–`######` (**L2–L6**): Nested sections inside a card / child tree branches in Mindmap / nested outline in Doc.
