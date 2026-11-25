# Changelog

## 0.5.5-beta.5 · Monochrome Frosted-Glass UI, Mobile Responsive & Semantic Tag Anchors

- **Monochrome Glass UI & ≥80% Feathered AI Glow**: Removed colored 4-side borders and opaque white modals; added a feathered ≥80% bottom-center breathing aura strictly when AI is actively working.
- **Desktop & Mobile Responsive Layout + Touch Gestures**: Full 4-corner HUD on desktop; safe-area mobile Bottom Sheets with `44px` tap targets, 1-finger pan, and native 2-finger pinch-to-zoom.
- **Unified Semantic Tag Anchors (Card + Tag 2-Target Model)**: 6-color pastel pills (`[Added]{#id .green}`), pure `5.5px` zero-ring dots (`[]{#id .amber}`, auto-pinned left), code trailing comment tags (`// {#id .blue}` rendered in left gutter), Mermaid comment tags (`%% {#id .green}`), cross-doc `#tagId` preservation, and `MD_TAG_DUPLICATE_ID` validation.

## 0.5.5-beta.4 · Plugin Marketplace, `clado plugin` CLI & Permission Audit

- Added `clado plugin <list|create|install|remove|search>`, lightweight JSON plugin registry, `GET /library/plugin-registry`, `DELETE /library/install-plugin`, and `low`/`medium`/`high` permission risk auditing.

## 0.5.5-beta.3 · Symmetric Line-to-Line Linking

- Added symmetric `clado:to:line|code|table|mermaid` links across Cards and Mindmap views with semantic drift fallback and `MD_MEDIA_LINK_TARGET` diagnostics.

## 0.5.5-beta.2 · Native Dual-Protocol Streaming Agent & Follow-AI

- Added system-level `clado.agent` with OpenAI/Anthropic true token streaming, `ask_user` decision cards, `.clado/sessions/` persistence, read-only local code probes, `test-cases` template, ACP dispatch, and SSE Follow-AI smooth glide.

## 0.5.5-beta.1 · Multi-Workspace Concurrent MCP & Layout Fixes

- Added concurrent multi-workspace serving under a single `clado serve`, top-left bar center alignment, and Cards-first view order.
