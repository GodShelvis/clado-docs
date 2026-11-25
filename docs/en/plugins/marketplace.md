# Plugin Marketplace & Audit

Clado uses a lightweight JSON registry architecture supporting built-in examples, private workspace registries (`.clado/plugin-registry.json`), and remote HTTP(S) registries.

```bash
clado plugin list [workspace]
clado plugin create <pluginId> [dir] --kind ui|executor
clado plugin install <pluginDir> [workspace]
clado plugin remove <pluginId> [workspace]
clado plugin search [query] [--registry <path-or-url>]
```

## Tiered Permission Risk Audit

| Risk Level | Permissions | Scope |
| :---: | --- | --- |
| <span class="demo-tag green">low</span> | `ui.mount:*`, `canvas.*.read` | Sandboxed UI panel & read-only canvas context |
| <span class="demo-tag amber">medium</span> | `capability.call:*`, `exposeToAgent: true` | Cross-plugin calls or schema-validated AI capabilities |
| <span class="demo-tag red">high</span> | `executor.spawn` | Launches local external ACP coding agent process |

Any registry entry attempting to spoof the reserved `clado.*` namespace is rejected automatically.
