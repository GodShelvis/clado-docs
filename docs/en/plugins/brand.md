# `clado.brand` · Brand & Global Settings

`clado.brand` is the **system menu and global control hub** pinned to the top-left corner of the canvas. It houses the Clado brand mark, Light/Dark theme switcher, one-click canvas screenshot export, and the visual Plugin Manager.

<div class="plugin-meta">
  <div class="plugin-meta-item"><span>Plugin ID</span><code>clado.brand</code></div>
  <div class="plugin-meta-item"><span>Mount Slot</span><strong>top-left</strong></div>
  <div class="plugin-meta-item"><span>Protection</span><strong>Built-in Protected (Always On)</strong></div>
  <div class="plugin-meta-item"><span>Mobile Layout</span><strong>Compact top-left brand pill</strong></div>
</div>

<img src="/images/plugin-brand.png" alt="clado.brand pill and expanded settings dropdown menu" class="plugin-shot" />

---

## Position & Appearance

- **Desktop Slot**: Floats quietly in the `top-left` corner, well clear of the main canvas viewport.
- **Collapsed State**: A frosted-glass pill displaying the vector Clado logo mark alongside the restrained lowercase `clado` wordmark.
- **Expanded State**: Opens a monochrome frosted-glass dropdown (`#clado-brand-settings`) with subtle hairline dividers. Clicking outside or pressing `Esc` closes it cleanly and returns focus to the trigger.
- **Mobile Layout**: Remains compact in the top-left safe area with ≥ 44px touch rows for comfortable one-handed tapping.

---

## Key Features

### 1. Light & Dark Theme Switcher

| Option | Behavior |
| --- | --- |
| **Light (`日间模式`)** | Switches to the crisp light monochrome canvas and frosted controls—ideal for presentations and screenshots. |
| **Dark (`夜间模式`)** | Switches to the low-glare dark canvas with automatically balanced dark-mode Tag accents. |

Theme selection persists in local browser storage across sessions. As the permanent settings host, `clado.brand` stays enabled so you can never lock yourself out of Plugin Manager.

### 2. Capture Current Canvas

Clicking **Capture Current Canvas** closes the menu and exports the active canvas viewport—cards, wires, and semantic Tags—into a sharp PNG image ready for PR reviews, specs, or team chats.

### 3. Visual Plugin Manager & Installer

Clicking **Plugin Manager** opens a centered frosted modal dialog for zero-JSON plugin administration:

- **Enable / Disable Switches**: Inspect every built-in and external plugin with its icon, status, and version. Toggle switches and click **Apply & Reload** to persist changes.
- **Visual Settings Editor**: Click **Settings** on any active plugin (such as `clado.agent`) to edit structured configuration fields directly in the UI.
- **One-Click Local Folder Install**: Click **Install Plugin**, pick a folder containing `clado-plugin.json`, review the validated manifest size limits (≤ 64KB manifest, ≤ 8MB total) and **requested permissions list**, then confirm to install into `.clado/plugins/`.

---

## Next Steps

- Explore the top-right switcher: [`clado.view-controls` · Views & Diagnostics →](/en/plugins/view-controls)
- Learn about plugin permissions & CLI: [Plugin Marketplace & Audit →](/en/plugins/marketplace)
