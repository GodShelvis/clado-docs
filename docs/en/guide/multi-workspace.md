# Multi-Workspace Concurrency

A single `clado serve <parent-dir>` instance can serve multiple isolated sub-workspaces concurrently—ideal when multiple AI agents work on separate requirements or modules under one root directory.

```text
/projects/requirements/               ← Run `clado serve` once here
├── req-order-refund/                 ← Independent workspace for Agent A
│   └── .clado/doc/refund-flow.md
├── req-inventory-lock/               ← Independent workspace for Agent B
│   └── .clado/doc/lock-design.md
└── req-test-cases/                   ← Independent workspace for Agent C
    └── .clado/doc/qa-cases.md
```

## Isolation Guarantees

- **Strict Path Boundary**: Every MCP call must specify an absolute `workspace` inside the served root directory; out-of-bounds paths are rejected.
- **Per-Workspace Locks & Routing**: Each sub-workspace maintains its own serial write lock, document versions, canvas selection, SSE event stream, plugin capability registry, and screenshot routing.
- **Instant Browser Switching**: Click the bottom-left directory pill to switch sub-workspaces or open multiple sub-workspaces side-by-side in separate tabs.
