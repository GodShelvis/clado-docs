# Protected Built-in Plugins (`clado.*`)

All official built-in features run under the reserved **`clado.*`** namespace and are protected by the kernel: third-party plugins cannot register `clado.*` IDs, override core views, or uninstall built-in controls.

- **Protected Views**: `clado.view.cards` (default), `clado.view.mindmap`, `clado.view.doc` (registered in frozen `window.CladoViews`).
- **4-Corner Frosted Glass HUD**: `clado.brand` (`top-left`), `clado.view-controls` (`top-right`), `clado.directory` (`bottom-left`), `clado.agent` (`bottom-right`).
