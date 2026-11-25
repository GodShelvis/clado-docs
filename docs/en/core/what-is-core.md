# Clado Core Engine

When you first open Clado, you see four floating frosted-glass controls in the corners of the screen: the brand menu, view switcher, document directory, and Inspiration Agent. **All four of those UI shells are built-in plugins.**

Turn every plugin off, and what remains running seamlessly underneath is **Clado Core**—the minimal, immutable engine that powers the entire canvas and protocol stack.

![Clado Core Kernel and Built-in Plugin Slots](/images/plugin-slots-map.svg)

---

## Clado Core in One Sentence

> **Clado Core = Plain Markdown Graph Parser + Multi-Workspace Atomic Storage + Frameless Infinite Canvas Runtime + Streamable HTTP MCP Gateway + Plugin Host & Sandbox.**

Even with zero UI plugins mounted, Clado Core remains fully operational: the browser renders a clean, frameless interactive canvas, `.md` files stay live-synced with disk, and any MCP client can read and mutate documents over `/mcp`.

---

## The Five Immutable Pillars of Clado Core

### 1. Markdown & Semantic Tag Graph Parser

A zero-dependency parser and validator that transforms standard `.md` files into a typed graph:

- **Node Hierarchy**: Maps `#` (L1) as independent canvas cards and `##`–`######` (L2–L6) as nested card sections and collapsible Mindmap tree branches.
- **Semantic Tags & Two-Target Links**: Parses `{#id .color}` anchors across prose, lists, tables, code gutters, and Mermaid nodes, resolving `[label](CardTitle)` and `[label](#tagId)` links into directed graph edges.
- **Live Diagnostics**: Detects empty headings, duplicate `tagId` definitions, broken link targets, and template rule violations.
- **Static Build Pipeline**: Compiles any `.md` workspace into self-contained static HTML via `clado build`.

### 2. Multi-Workspace Atomic Storage

The local filesystem is the single source of truth—no opaque databases or hidden coordinate files:

- **Single & Multi-Workspace Hosting**: Serve one project or an entire parent folder containing multiple independent sub-workspaces, each with isolated `.clado/doc/`, templates, plugins, and sessions.
- **Path Containment & Atomic Writes**: Strict path-escape guards, concurrency write locks, and atomic temp-file replacement keep multi-agent edits safe.
- **Cascading Reference Rewrites**: Renaming documents or card headings automatically rewrites inbound references while preserving `#tagId` anchors.

### 3. Infinite Canvas & Three-View Runtime

The full-viewport canvas area is rendered and controlled directly by Clado Core:

- **Three Views from One AST**: Cards (auto-layered call graphs + Bézier wires), Mindmap (collapsible horizontal hierarchy), and Document (clean linear reading).
- **Camera & Touch Gestures**: Pan, wheel zoom, 1-finger drag, native 2-finger pinch-to-zoom, fit-to-view centering, and URL state synchronization.
- **Focus & Chain Tracing**: Clicking any card or semantic Tag highlights upstream and downstream dependency chains while softening unrelated noise.
- **Real-Time SSE Bus**: Streams file changes, active AI operations, and viewport focus hints to the browser—driving the feathered bottom-center aura on cards strictly while AI is actively working on them.

### 4. Streamable HTTP MCP Gateway

Exposes the `/mcp` endpoint natively so external AI clients (Claude Code, Cursor, ZCode, etc.) can collaborate directly on the live canvas:

- **8 Core Tools**: `clado_workspace`, `clado_templates`, `clado_documents`, `clado_nodes`, `clado_links`, `clado_batch`, `clado_capabilities`, and `clado_screenshot`.
- **Shared Human Context**: Your active multi-selection, focused card/Tag, and open document sync directly into MCP sessions via `clado_workspace(action: "selection")`.

### 5. Plugin Host & Security Sandbox

Clado Core does **not** hardcode menus, drawers, or chat windows. Instead, it provides a clean host layer:

- **Four Corner Slots**: `top-left`, `top-right`, `bottom-left`, and `bottom-right` floating HUD anchors on desktop, automatically coordinated into safe-area mobile layouts and Bottom Sheets on narrow screens.
- **Shared Frosted-Glass Tokens**: Exposes `.clado-ui-glass`, `.clado-ui-glass-panel`, `.clado-ui-button`, and `.clado-ui-dialog` primitives for consistent Light & Dark aesthetics.
- **Protected Namespace & Isolation**: The `clado.*` namespace is reserved and protected by the kernel; external UI plugins run inside sandboxed iframes with tiered permission auditing.

---

## Core vs Built-in Plugins vs External Plugins

| Layer | Responsibility | Toggleable / Replaceable | Examples |
| --- | --- | --- | --- |
| **Clado Core** | Parsing, 3-view canvas, atomic storage, MCP gateway, SSE bus, plugin host | **Always on** (kernel) | Canvas runtime, `/mcp`, CLI |
| **Built-in Plugins (`clado.*`)** | High-frequency interactive HUD shells shipped with Clado | **Toggleable in Plugin Manager** | [`clado.brand`](/en/plugins/brand), [`clado.view-controls`](/en/plugins/view-controls), [`clado.directory`](/en/plugins/directory), [`clado.agent`](/en/plugins/agent) |
| **External Plugins** | Team-specific UI capabilities, bridges, or custom ACP executors | **Install / uninstall freely** | Issue trackers, tunnel plugins, custom coding executors |

---

## Next Steps

- Explore every built-in plugin's slot, appearance, and features: [Built-in Plugins Overview →](/en/plugins/overview)
- Dive into the 4-layer architecture: [Microkernel Architecture →](/en/reference/architecture)
