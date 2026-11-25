# `clado.directory` · Documents & Workspaces

`clado.directory` is the **document tree navigator and multi-workspace switcher** mounted in the bottom-left corner of the canvas. Browse nested folders, filter files instantaneously, switch sub-workspaces, and inspect raw Markdown without leaving the viewport.

<div class="plugin-meta">
  <div class="plugin-meta-item"><span>Plugin ID</span><code>clado.directory</code></div>
  <div class="plugin-meta-item"><span>Mount Slot</span><strong>bottom-left</strong></div>
  <div class="plugin-meta-item"><span>Protection</span><strong>Built-in Protected (clado.*)</strong></div>
  <div class="plugin-meta-item"><span>MCP Capability</span><code>directory</code> (open target canvas)</div>
</div>

<img src="/images/plugin-directory.png" alt="clado.directory expanded document tree and search drawer" class="plugin-shot" />

---

## Position & Appearance

- **Desktop Slot**: Pinned to `bottom-left`.
- **Collapsed State**: A compact frosted pill showing a folder icon, the document count, and (in multi-workspace mode) the active workspace name.
- **Expanded State**: Opens upward into a frosted-glass drawer (`#directory`) organized into: **Workspace Switcher** (when multiple workspaces are mounted), **Live Search Input**, **Collapsible Document Tree**, **Local Sync Status**, and **Quick Actions**.
- **Mobile Layout**: Expands into a centered Bottom Sheet with comfortable touch targets and independent list scrolling that never fights canvas pan gestures.

---

## Key Features

### 1. Multi-Workspace Switching

When running `clado serve <parent-dir>`, the top of the drawer displays all registered sub-workspaces so you can switch project contexts instantaneously without restarting the server.

### 2. Folder Tree & Instant Search

- **Nested Folder Tree**: Mirrors `.clado/doc/` structure, preserves folder open/closed states, and shows each document's `#` heading alongside its filename.
- **Instant Filtering**: Typing any title or path substring filters the tree live and auto-expands matching folders.

### 3. Back, Refresh & Raw Source Viewer

| Button | Action |
| --- | --- |
| **`← Back`** | Steps back through cross-document navigation history. |
| **`Refresh`** | Re-scans the local directory and reloads the active document AST. |
| **`Source`** | Opens a frosted modal dialog displaying the raw `.md` plain text for the current canvas. |

### 4. Sync Status & Skipped File Inspector

Displays real-time local SSE sync status and surfaces a clickable badge whenever any file was skipped due to syntax or size constraints so nothing disappears silently.

---

## Exposed MCP Capability (`directory`)

`clado.directory` registers the `directory` capability on the plugin host. When an AI client invokes `clado_capabilities` (`action: "call"` targeting `clado.directory`), the browser smoothly switches to the requested `.md` canvas.

---

## Next Steps

- Learn multi-project hosting: [Multi-Workspace Concurrency →](/en/guide/multi-workspace)
- Explore the bottom-right AI workbench: [`clado.agent` · Inspiration Agent →](/en/plugins/agent)
