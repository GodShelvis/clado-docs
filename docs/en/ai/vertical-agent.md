# Built-in Agent & ACP Dispatch

Clado ships a system-level vertical Agent (`clado.agent`) focused on **codebase analysis, architecture design, mindmap test cases, and diff auditing**, while delegating heavy code implementation to external coding agents via **ACP (Agent Client Protocol)**.

## Key Capabilities

- **Dual-Protocol True Token Streaming**: Native support for both OpenAI-compatible and Anthropic APIs (with Prompt Caching and collapsible real-time thinking blocks).
- **4 Workflows & Built-in Personas**: `Architecture Design`, `Test Cases`, `Diff Audit`, and `Dispatch Coding` (ACP).
- **Read-Only Local Codebase Probes**: `probe_tree`, `probe_search`, `probe_read`, and `probe_git_diff` ground every diagram in real repository code.
- **Persistent Sessions**: Multi-session history saved under `.clado/sessions/` with lightweight context compaction.
- **One-Click ACP Dispatch**: Bundle approved `.md` specs and test trees and dispatch directly to external executors (ZCode, Claude Code, Codex) without leaving the canvas.
