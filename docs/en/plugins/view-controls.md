# `clado.view-controls` · Views & Diagnostics

`clado.view-controls` is the **view mode switcher and document health indicator** floating in the top-right corner of the canvas. It switches instantaneously across the three synchronized views and surfaces diagnostic counts or focus exit controls strictly when needed.

<div class="plugin-meta">
  <div class="plugin-meta-item"><span>Plugin ID</span><code>clado.view-controls</code></div>
  <div class="plugin-meta-item"><span>Mount Slot</span><strong>top-right</strong></div>
  <div class="plugin-meta-item"><span>Protection</span><strong>Built-in Protected (clado.*)</strong></div>
  <div class="plugin-meta-item"><span>Mobile Layout</span><strong>Compact top-right segmented pill</strong></div>
</div>

<img src="/images/plugin-view-controls.png" alt="clado.view-controls top-right frosted segmented view switcher" class="plugin-shot" />

---

## Position & Appearance

- **Desktop Slot**: Pinned to `top-right`, balancing `clado.brand` on the opposite side of the top edge.
- **Animated Segmented Control**: A frosted-glass pill housing a smoothly sliding thumb (`.clado-view-thumb`) across **Cards**, **Mindmap**, and **Document**.
- **On-Demand Status Pills**: Beneath the switcher lies `.clado-view-status`, completely hidden when the document is healthy and unfocused—surfacing only when diagnostics or focus mode require attention.
- **Mobile Layout**: Scales compactly along the top-right safe area without colliding with the brand mark.

---

## Key Features

### 1. Instant Three-View Switching

| View | Visual Form | Ideal For |
| --- | --- | --- |
| **Cards** | Auto-layered cards + Bézier directed wires + semantic Tag anchors | System architecture, call graphs, engineering RFC reviews |
| **Mindmap** | Collapsible horizontal tree layout | Test case matrices, requirement breakdown, boundary audits |
| **Document** | Clean linear long-form reading flow | End-to-end reading and narrative review |

### 2. Live Diagnostics Counter (`N issues`)

Clado Core runs full validation on every parse (broken links, duplicate `tagId`, template rule violations):

- **Silent when clean**: Zero clutter when a document has no issues.
- **Surfaces automatically on warnings/errors**: Displays `N issues` beneath the switcher (highlighted softly when errors exist), with exact error/warning tooltip breakdown. Clicking opens the full Diagnostics dialog.

### 3. Exit Focus Pill

When you click a card or semantic Tag to focus its upstream/downstream call chain, an **Exit Focus** pill appears directly below the switcher. Click it (or press `Esc` / click blank canvas) to restore the full canvas view.

---

## Next Steps

- Learn canvas zoom, pan, and chain focus interactions: [Three Views & Interactions →](/en/syntax/views-and-interactions)
- Explore the bottom-left navigator: [`clado.directory` · Documents & Workspaces →](/en/plugins/directory)
