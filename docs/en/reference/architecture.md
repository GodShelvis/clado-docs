# Microkernel Architecture

Clado follows a **4-Layer Protected Microkernel** design: keep the core parser, workspace locking, and MCP gateway minimal and rock-solid, protect built-in `clado.*` features, and run all external extensions declaratively inside sandboxes.

![Clado 4-Layer Microkernel Architecture](/images/arch-4layer.svg)

- **Layer 0 (Plain Text Single Source of Truth)**: `.md` / `.mdc`, `.clado/templates`, `.clado/plugins`, `.clado/sessions`.
- **Layer 1 (Immutable Core Kernel)**: Parser + Tag engine + Diagnostics, multi-workspace serial locks, Canvas Host + SSE, MCP Gateway.
- **Layer 2 (Protected Built-ins `clado.*`)**: `clado.view.{cards,mindmap,doc}` and `clado.{brand,view-controls,directory,agent}`.
- **Layer 3 (External Plugins & Marketplace)**: Sandboxed UI capability plugins & ACP coding executors with tiered permission auditing.
