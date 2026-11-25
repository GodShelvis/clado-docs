# Semantic Tags & Precision Links

Clado unifies line-level linking across prose, lists, tables, code blocks, and Mermaid diagrams with a **2-Target Model**: link to a **Card** (`#CardTitle`) or any unique **Semantic Tag** (`#tagId`).

![Card + Semantic Tag Linking Model](/images/tags-anatomy.svg)

## 1. Six-Color Semantic Palette

| Class / Alias | Pill Form | Dot Form | Semantic Meaning |
| --- | --- | :---: | --- |
| `.green` / `.add` | <span class="demo-tag green">Added</span> | <span class="demo-dot green"></span> | **Added** — new endpoint, field, or branch |
| `.amber` / `.mod` | <span class="demo-tag amber">Changed</span> | <span class="demo-dot amber"></span> | **Changed / Caution** — modified behavior or alert |
| `.red` / `.del` | <span class="demo-tag red">Removed</span> | <span class="demo-dot red"></span> | **Removed / Risk** — deprecated or high-risk item |
| `.blue` / `.spec` | <span class="demo-tag blue">Spec</span> | <span class="demo-dot blue"></span> | **Spec / Contract** — requirement or core flow |
| `.purple` / `.note` | <span class="demo-tag purple">Note</span> | <span class="demo-dot purple"></span> | **Note** — async behavior, fallback, extra context |
| `.gray` (default) | <span class="demo-tag gray">Anchor</span> | <span class="demo-dot gray"></span> | **Neutral Anchor** — general target |

## 2. Two Visual Forms (Always Left-Aligned for Incoming Wires)

- **Text Pill**: `[Added]{#idempotency .green}` renders as a soft pastel pill.
- **Pure Dot**: `[]{#cb-verify .amber}` renders as a crisp **`5.5px` pure dot with zero outer ring**, auto-pinning cleanly to the left of the line/bullet regardless of where it is typed in Markdown.
- **Code Block Trailing Comments** (keeps raw code 100% compilable/copyable; supports `//`, `#`, `--`, `/* */`, `<!-- -->`):
  ```ts
  verifySign(req); // {#verify-sign .blue}
  return ledger.commit(req); // {#commit-ledger .green Commit}
  ```
  Clado strips the trailing `{#...}` visually and places the dot or compact pill in the **left gutter** of that code line.
- **Mermaid Comment Tag**: `%% {#SETTLE .green}` anchors wires to the left edge of the Mermaid node box.

## 3. Linking & Uniqueness

- Same-document Tag link: `[Verify Signature](#verify-sign)` or `[Verify Signature](PaymentGateway#verify-sign)`
- Cross-document Tag link: `[Idempotent Commit](ledger.md#idempotency)` (preserved automatically on file moves/renames)
- Duplicate Tag IDs in the same document trigger the `MD_TAG_DUPLICATE_ID` error diagnostic.
