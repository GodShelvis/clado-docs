# Built-in Plugins Overview

Clado ships with **four protected built-in plugins** under the kernel-reserved `clado.*` namespace. Mounted across the four corners of the canvas, they form the out-of-the-box desktop and mobile HUD.

![Clado Core Kernel and Built-in Plugin Slots](/images/plugin-slots-map.svg)

---

## The Four Built-in Plugins

Open any plugin page below for its exact **position, appearance, mobile layout, features, interactions, and configuration**:

| Plugin ID | Name | Mount Slot | Core Role | MCP Capability | Guide |
| --- | --- | --- | --- | --- | --- |
| `clado.brand` | **Brand & Global Settings** | `top-left` | Brand pill, Light/Dark theme switcher, canvas screenshot export, visual Plugin Manager & config editor | — | [Read details →](/en/plugins/brand) |
| `clado.view-controls` | **View Switcher & Diagnostics** | `top-right` | Animated Cards / Mindmap / Document switcher, live diagnostics counter, Exit Focus pill | — | [Read details →](/en/plugins/view-controls) |
| `clado.directory` | **Documents & Workspaces** | `bottom-left` | Multi-workspace switcher, collapsible document tree, live search, Back / Refresh / Source viewer | `directory` (open canvas) | [Read details →](/en/plugins/directory) |
| `clado.agent` | **Inspiration Agent** | `bottom-right` | Design / QA / Diff Audit / ACP Dispatch workflows, dual-protocol streaming, `ask_user` decisions, session history | Direct canvas & MCP bridge | [Read details →](/en/plugins/agent) |

---

## Shared Traits

1. **Kernel-Protected `clado.*` Namespace**: Only official built-in plugins shipped with Clado may claim `clado.*` IDs. External plugins attempting to register a `clado.*` ID are rejected during manifest loading.
2. **Restrained Monochrome Glass Aesthetics**: Collapsed pills float quietly in the four corners without blocking the canvas, automatically adapting to Light/Dark themes and collapsing into mobile Bottom Sheets on narrow screens.
3. **Visual Toggle & Configuration**: Open [`clado.brand`](/en/plugins/brand) → **Plugin Manager** to inspect active plugins, toggle optional plugins on or off, or edit plugin settings visually.

---

## Deep Dive into Each Plugin

- [`clado.brand` · Brand & Global Settings →](/en/plugins/brand)
- [`clado.view-controls` · Views & Diagnostics →](/en/plugins/view-controls)
- [`clado.directory` · Documents & Workspaces →](/en/plugins/directory)
- [`clado.agent` · Inspiration Agent →](/en/plugins/agent)
