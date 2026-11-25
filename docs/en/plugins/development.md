# Build Your First Plugin

Scaffold a runnable UI capability plugin or ACP coding executor plugin in one command:

```bash
# UI capability plugin (iframe sandbox + optional MCP exposure)
clado plugin create acme.review ./my-review-plugin --kind ui

# External ACP coding executor plugin
clado plugin create acme.coder ./my-coder-executor --kind executor
```

Install into a workspace with automatic permission audit:

```bash
clado plugin install ./my-review-plugin /path/to/your-workspace
clado serve /path/to/your-workspace --experimental-plugins
```

Inside `ui/main.js`, connect via `window.CladoPluginSDK.connect()`, read granted snapshots with `plugin.getContext(['document', 'selection'])`, and expose structured capabilities via `plugin.provide({ 'review.summary@1': fn })`.
