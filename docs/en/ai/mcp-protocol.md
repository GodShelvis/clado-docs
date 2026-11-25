# Streamable HTTP MCP

`clado serve` exposes both the live read-only canvas (`http://127.0.0.1:4317/`) and the **Streamable HTTP MCP** endpoint (`http://127.0.0.1:4317/mcp`) on the same port.

## 8 Cohesive Core Tools

| Tool | Actions | Purpose |
| --- | --- | --- |
| `clado_workspace` | `init`, `inspect`, `workspaces`, `search`, `validate`, `selection` | Workspace discovery, search, full validation, and reading live canvas multi-selection |
| `clado_templates` | `list`, `read`, `create`, `update`, `delete`, `pull`, `push` | Manage and sync workspace/user templates |
| `clado_documents` | `list`, `read`, `create`, `copy`, `update`, `rename`, `delete` | `.md` / `.mdc` document lifecycle with automatic reference rewriting |
| `clado_nodes` | `read`, `query`, `create`, `insert`, `update`, `rename`, `move`, `delete` | Heading-path edits and upstream/downstream graph queries |
| `clado_links` | `list`, `connect`, `disconnect` | Precision line, code, table, and Mermaid linking |
| `clado_batch` | `operations` (1–100) | Atomic transactional batches with `dryRun: true` support |
| `clado_capabilities` | `list`, `call` | Discover and invoke live plugin capabilities exposed to AI |
| `clado_screenshot` | Direct call | Capture rendered canvas PNGs via `clado.host/canvas.capture@1` |

## Dynamic Plugin MCP Mounting

Any plugin declaring `exposeToAgent: true` with JSON Schema Draft 7 `inputSchema` / `outputSchema` in `clado-plugin.json` is automatically registered and routed per `(workspace, viewId)` through `clado_capabilities`—keeping core MCP tool context compact no matter how many plugins are installed.
